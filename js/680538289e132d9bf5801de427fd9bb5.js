(function () {
    var _id = "680538289e132d9bf5801de427fd9bb5";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:184px;height:43px;'></div>");
    var _t = document.createElement("script");
    _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {"currentType": "1", "params": {"usertime": true, "tz": "3", "utc": 1753628400000}},
            "design": {
                "type": "text",
                "params": {
                    "number-font-family": {
                        "family": "Poiret One",
                        "link": "<link href='//fonts.googleapis.com/css?family=Poiret+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "32",
                    "number-font-color": "#000",
                    "separator-margin": "9",
                    "separator-on": true,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Poiret One",
                        "link": "<link href='//fonts.googleapis.com/css?family=Poiret+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "10",
                    "text-font-color": "#434343"
                }
            },
            "designId": 1,
            "theme": "white",
            "width": 184,
            "height": 43
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);