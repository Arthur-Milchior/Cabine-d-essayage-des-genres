/*
Copyright 2020 Arthur Milchior <arthur@milchior.fr>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

text_prefilled = {}; 
current_texts = {}; 

function genderToCurrent(gender) {
    current_texts = text_prefilled[gender];
}

function applyGender(gender) {
    genderToCurrent(gender);
    currentToField();
    applyCurrent();
}

function applyCurrent() {
    for (var id in current_texts) {
        var gendered = current_texts[id];
        $(`#${id}`).html(gendered);
    }
}

function currentToField() {
    form = $("#form");
    form.empty();
    var $table = $("<table>");
    for (var id in current_texts) {
        var current_text = current_texts[id];
        var field_id = `field_${id}`;
        var field_name = id.replace(/_/g, " ");
        var td = (`<tr><td><label for="${field_id}">${field_name}</td><td><input type=text id="${field_id}" name="${field_id}" value="${current_text}"/></td></tr>`);
        var $td = $(td);
        $table.append($td)
    }
    form.append($table);
}    

function loadText(text, callback) {
    $.getJSON(`${text}.json`, 
              function (data) {
                  text_prefilled = data["genders"];
                  $("#texte").load(`${text}.html`,
                                   callback);

                  // Considering default: Either the default value, or
                  // the gender of the default value
                  if ((typeof data["default"]) == "string") {
                      // If default points to another value, then use this value instead.
                      current_texts = text_prefilled[data["default"]];
                  } else {
                      current_texts = data["default"];
                  }
                  currentToField();

                  // Lang
                  $defaults = $("#defaults");
                  $defaults.empty();
                  for (var gender in data["genders"]) {
                      console.log(gender);
                      link = `<a href="#" onclick="applyGender('${gender}')">${gender}</a>, `;
                      $defaults.append(link);
                  }
              }
             );
}

function genderToField(gender) {
    genderToCurrent(gender);
    applyCurrent();
}

function fieldToText() {
    fieldToCurrent();
    applyCurrent();
}
function fieldToCurrent() {
    for (var id in current_texts) {
        var field = `field_${id}`;
        var gendered = $(`#${field}`).val();
        current_texts[id] = gendered;
    }
}

function applyField() {
    fieldToCurrent();
    applyCurrent();
}

var randomKey = function (obj) {
    var keys = Object.keys(obj)
    return keys[ keys.length * Math.random() << 0];
};

$(
    function() {
        $.getJSON('texts.json', 
                  function(texts) {
                      var random_key = randomKey(texts);
                      var title = texts[random_key];
                      loadText(random_key);
                      $("H1").text(title);
                      console.log(title);
                  }
                 )
    }
);
