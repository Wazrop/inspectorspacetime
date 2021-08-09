(function (thisObj) {
    var JSON;
    JSON || (JSON = {});
    (function () { function k(a) { return a < 10 ? "0" + a : a; } function o(a) { p.lastIndex = 0; return p.test(a) ? '"' + a.replace(p, function (a) { var c = r[a]; return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4); }) + '"' : '"' + a + '"'; } function l(a, j) { var c, d, h, m, g = e, f, b = j[a]; b && typeof b === "object" && typeof b.toJSON === "function" && (b = b.toJSON(a)); typeof i === "function" && (b = i.call(j, a, b)); switch (typeof b) {
        case "string": return o(b);
        case "number": return isFinite(b) ? String(b) : "null";
        case "boolean":
        case "null": return String(b);
        case "object":
            if (!b)
                return "null";
            e += n;
            f = [];
            if (Object.prototype.toString.apply(b) === "[object Array]") {
                m = b.length;
                for (c = 0; c < m; c += 1)
                    f[c] = l(c, b) || "null";
                h = f.length === 0 ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]" : "[" + f.join(",") + "]";
                e = g;
                return h;
            }
            if (i && typeof i === "object") {
                m = i.length;
                for (c = 0; c < m; c += 1)
                    typeof i[c] === "string" && (d = i[c], (h = l(d, b)) && f.push(o(d) + (e ? ": " : ":") + h));
            }
            else
                for (d in b)
                    Object.prototype.hasOwnProperty.call(b, d) && (h = l(d, b)) && f.push(o(d) + (e ? ": " : ":") + h);
            h = f.length === 0 ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + g + "}" : "{" + f.join(",") + "}";
            e = g;
            return h;
    } } if (typeof Date.prototype.toJSON !== "function")
        Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + k(this.getUTCMonth() + 1) + "-" + k(this.getUTCDate()) + "T" + k(this.getUTCHours()) + ":" + k(this.getUTCMinutes()) + ":" + k(this.getUTCSeconds()) + "Z" : null; }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () { return this.valueOf(); }; var q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, p = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, n, r = { "\u0008": "\\b", "\t": "\\t", "\n": "\\n", "\u000c": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, i; if (typeof JSON.stringify !== "function")
        JSON.stringify = function (a, j, c) { var d; n = e = ""; if (typeof c === "number")
            for (d = 0; d < c; d += 1)
                n += " ";
        else
            typeof c === "string" && (n = c); if ((i = j) && typeof j !== "function" && (typeof j !== "object" || typeof j.length !== "number"))
            throw Error("JSON.stringify"); return l("", { "": a }); }; if (typeof JSON.parse !== "function")
        JSON.parse = function (a, e) { function c(a, d) { var g, f, b = a[d]; if (b && typeof b === "object")
            for (g in b)
                Object.prototype.hasOwnProperty.call(b, g) && (f = c(b, g), f !== void 0 ? b[g] = f : delete b[g]); return e.call(a, d, b); } var d, a = String(a); q.lastIndex = 0; q.test(a) && (a = a.replace(q, function (a) { return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4); })); if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return d = eval("(" + a + ")"), typeof e === "function" ? c({ "": d }, "") : d; throw new SyntaxError("JSON.parse"); }; })();
    var scriptName = 'Inspector Spacetime';
    var scriptVersion = '2.3';
    var thisComp, inspectorFolder, margin, leftEdge, panelSize = [0, 0], dataSize = [0, 0];
    var exp_counter = 'var sTime = marker.key("Start").time; var eTime = marker.key("End").time; var countTime = Math.max(time - sTime, 0); countTime = Math.min(countTime, eTime - sTime); var counter = Math.round(countTime * 1000); var playIcon = (time > sTime && time < eTime) ? "\u25ba " : "\u25a0 "; playIcon + counter + "ms";';
    var icons = {
        build: [
            '104 26.478 104.82 32.260 104 38.043 116.39 35.565 115.56 40.521 123 32.260 115.56 24 116.39 28.956',
            '93 48 93 57 34 57 34 43 32 43 32 39 34 39 34 38 30 38 30 34 34 34 34 7 36 7 36 34 69 34 69 38 36 38 36 39 80 39 80 43 36 43 36 55 91 55 91 48 63 48 63 44 91 44 91 16 38 16 38 12 91 12 91 9 36 9 36 7 93 7 93 12 96 12 96 16 93 16 93 44 98 44 98 48 93 48',
            '45 23 91 23 91 27 45 27',
            '65 49 67 51 65 53 63 51',
            '76 17 78 19 76 21 74 19',
            '40 17 42 19 40 21 38 19',
            '85 49 89 49 87.66 51 89 53 85 53 86.33 51',
            '69 28 73 28 71.66 30 73 32 69 32 70.33 30',
            '50 28 54 28 52.66 30 54 32 50 32 51.33 30',
            '160 7 160 56 170 56 170 54 160 54 160 53 174 53 174 51 160 51 160 50 167 50 167 48 168 48 168 50 173 50 173 48 160 48 160 47 166 47 166 45 160 45 160 42 172 42 172 40 160 40 160 39 170 39 170 37 160 37 160 36 167 36 167 34 168 34 168 36 177 36 177 34 160 34 160 33 172 33 172 31 160 31 160 28 170 28 170 26 160 26 160 25 172 25 172 23 160 23 160 22 167 22 167 20 168 20 168 22 175 22 175 20 160 20 160 19 169 19 169 17 160 17 160 14 176 14 176 12 160 12 160 11 173 11 173 9 160 9 160 7 181 7 181 58 157 58 131 58 131 7 157 7 157 9 133 9 133 56 157 56 157 7'
        ]
    };
    function setComp() {
        app.activeViewer.setActive();
        thisComp = app.project.activeItem;
        if (!thisComp || !(thisComp instanceof CompItem)) {
            alert('Gotta select a comp first', scriptName);
            return false;
        }
        workStart = thisComp.workAreaStart;
        workEnd = workStart + thisComp.workAreaDuration;
        return true;
    }
    function buttonColorText(parentObj, accentColor, buttonText) {
        var btn = parentObj.add('button', undefined, '', { name: 'ok' });
        btn.fillBrush = btn.graphics.newBrush(btn.graphics.BrushType.SOLID_COLOR, hexToArray(accentColor));
        btn.text = buttonText;
        btn.fillBrush = btn.graphics.newBrush(btn.graphics.BrushType.SOLID_COLOR, hexToArray(accentColor));
        btn.textPen = btn.graphics.newPen(btn.graphics.PenType.SOLID_COLOR, hexToArray('#ffffff'), 1);
        btn.onDraw = gfxDraw;
        return btn;
        function gfxDraw() {
            with (this) {
                graphics.drawOSControl();
                graphics.rectPath(0, 0, size[0], size[1]);
                graphics.fillPath(fillBrush);
                if (text) {
                    graphics.drawString(text, textPen, (size[0] - graphics.measureString(text, graphics.font, size[0])[0]) / 2, (size[1] - graphics.measureString(text, graphics.font, size[0])[1]) / 1.75, graphics.font);
                }
            }
        }
        function hexToArray(hexString) {
            var hexColor = hexString.replace('#', '');
            var r = parseInt(hexColor.slice(0, 2), 16) / 255, g = parseInt(hexColor.slice(2, 4), 16) / 255, b = parseInt(hexColor.slice(4, 6), 16) / 255;
            return [r, g, b, 1];
        }
    }
    function buttonColorVector(parentObj, iconVec, iconColor, size) {
        var artSize = size;
        var vButton = parentObj.add('button', [0, 0, size[0], size[1], undefined]);
        vButton.coord = vecToPoints(iconVec);
        vButton.fillColor = iconColor;
        vButton.onDraw = vecDraw;
        return vButton;
        function vecToPoints(vecCoord) {
            var points = [];
            var n;
            for (var i = 0; i < vecCoord.length; i++) {
                var eachNum = vecCoord[i].split(' ');
                var coordinates = [];
                var sets = [];
                for (var k = 0; k < eachNum.length; k += 2) {
                    sets.push(eachNum[k] + ',' + eachNum[k + 1]);
                }
                for (var j = 0; j < sets.length; j++) {
                    n = sets[j].split(',');
                    coordinates[j] = n;
                    coordinates[j][0] = (parseFloat(coordinates[j][0]));
                    coordinates[j][1] = (parseFloat(coordinates[j][1]));
                }
                points.push(coordinates);
            }
            return points;
        }
        function hexToArray(hexString) {
            var hexColor = hexString.replace('#', '');
            var r = parseInt(hexColor.slice(0, 2), 16) / 255, g = parseInt(hexColor.slice(2, 4), 16) / 255, b = parseInt(hexColor.slice(4, 6), 16) / 255;
            return [r, g, b, 1];
        }
        function vecDraw() {
            with (this) {
                graphics.drawOSControl();
                graphics.rectPath(0, 0, size[0], size[1]);
                graphics.fillPath(graphics.newBrush(graphics.BrushType.SOLID_COLOR, hexToArray(fillColor)));
                for (var i = 0; i < coord.length; i++) {
                    var line = coord[i];
                    graphics.newPath();
                    graphics.moveTo(line[0][0] + (size[0] / 2 - artSize[0] / 2), line[0][1]);
                    for (var j = 0; j < line.length; j++) {
                        graphics.lineTo(line[j][0] + (size[0] / 2 - artSize[0] / 2), line[j][1]);
                    }
                    graphics.fillPath(graphics.newBrush(graphics.BrushType.SOLID_COLOR, [1, 1, 1, 0.75]));
                }
            }
        }
    }
    function setTimeMarkers(layer, startTime, endTime) {
        var layer_marker1 = new MarkerValue('Start');
        layer_marker1.eventCuePoint = true;
        layer_marker1.setParameters({});
        layer('ADBE Marker').setValueAtTime(startTime, layer_marker1);
        var layer_marker2 = new MarkerValue('End');
        layer_marker2.eventCuePoint = true;
        layer_marker2.setParameters({});
        layer('ADBE Marker').setValueAtTime(endTime, layer_marker2);
    }
    function timeToMs(time) {
        return Math.round(time * 1000) + 'ms';
    }
    function buildText_plain(str) {
        var propStr = str;
        try {
            var dynText = thisComp.layers.addText('Spec Layer Name');
            dynText.name = 'Spec Layer Name';
            dynText.comment = scriptName + '_data';
            var dynText_TextProp = dynText('ADBE Text Properties')('ADBE Text Document');
            var dynText_TextDocument = dynText_TextProp.value;
            dynText_TextDocument.resetCharStyle();
            dynText_TextDocument.fontSize = Math.floor(dataSize[0] / 16);
            dynText_TextDocument.font = 'CourierNewPS-BoldMT';
            dynText_TextDocument.applyFill = true;
            dynText_TextDocument.fillColor = [1, 1, 1];
            dynText_TextDocument.applyStroke = false;
            dynText_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
            dynText_TextDocument.tracking = -30;
            if (parseFloat(app.version) >= 13.2) {
                dynText_TextDocument.verticalScale = 1;
                dynText_TextDocument.horizontalScale = 1;
                dynText_TextDocument.baselineShift = 0;
                dynText_TextDocument.tsume = 0;
            }
            dynText_TextProp.setValue(dynText_TextDocument);
            dynText_TextProp.setValue(propStr);
            var manualLineHeight = 10;
            var lineHeight = dynText('ADBE Text Properties')(4).addProperty('ADBE Text Animator');
            lineHeight.name = 'Line Height';
            lineHeight('ADBE Text Animator Properties').addProperty('ADBE Text Line Spacing');
            lineHeight(1).addProperty('ADBE Text Selector');
            lineHeight(2)('ADBE Text Line Spacing').setValue([0, manualLineHeight]);
            dynText('ADBE Transform Group')('ADBE Anchor Point').setValue([0, -dynText_TextDocument.fontSize * 0.82, 0]);
            dynText('ADBE Transform Group')('ADBE Position').setValue([leftEdge, margin, 0]);
            return dynText;
        }
        catch (e) {
            alert([
                e.toString(),
                'Error on line: ' + e.line.toString()
            ].join('\n'), scriptName);
        }
    }
    function buildTextBlock(p) {
        var firstKeyTime = p.firstKeyTime;
        var str = '';
        for (var j = 0; j < p.layers.length; j++) {
            layer = p.layers[j];
            str += '\u2261 ' + layer.name + ' \u2261\n';
            for (var i = 0; i < layer.props.length; i++) {
                prop = layer.props[i];
                str += '- ' + prop.name + ' -\n';
                str += 'Delay: ' + timeToMs(prop.startTime - firstKeyTime) + '\n';
                str += 'Dur: ' + timeToMs(prop.dur) + '\n';
                str += 'Val: ' + getValChange(prop) + '\n';
                str += getEase(prop) + '\n\n';
            }
        }
        return str;
    }
    function getKeyRange() {
        var firstKeyTime = 9999999;
        var lastKeyTime = 0;
        for (var i = 0; i < thisComp.selectedLayers.length; i++) {
            var layer = thisComp.selectedLayers[i];
            for (var j = 0; j < layer.selectedProperties.length; j++) {
                var prop = layer.selectedProperties[j];
                for (var k = 0; k < prop.selectedKeys.length; k++) {
                    var key = prop.selectedKeys[k];
                    firstKeyTime = Math.min(firstKeyTime, prop.keyTime(key));
                    lastKeyTime = Math.max(lastKeyTime, prop.keyTime(key));
                }
            }
        }
        return [firstKeyTime, lastKeyTime];
    }
    function getPropObj(opt_propObj) {
        if (opt_propObj == undefined) {
            propCollect = [],
                firstKeyTime = 9999999,
                lastKeyTime = 0;
            var propObj = {
                firstKeyTime: 9999999,
                lastKeyTime: 0,
                layers: []
            };
        }
        else {
            propObj = opt_propObj;
        }
        app.activeViewer.setActive();
        if (!setComp()) {
            return;
        }
        var selectedLayers = thisComp.selectedLayers;
        try {
            for (var i = 0; i < selectedLayers.length; i++) {
                var alreadyInList = false;
                for (var k = 0; k < propObj.layers.length; k++) {
                    if (selectedLayers[i].index == propObj.layers[k].index) {
                        var selectedProps = getProps(selectedLayers[i]);
                        var alreadyInPropList = false;
                        for (var m = 0; m < selectedProps.length; m++) {
                            for (var n = 0; n < propObj.layers[k].props.length; n++) {
                                if (propObj.layers[k].props[n].obj.matchName == selectedProps[m].obj.matchName) {
                                    alreadyInPropList = true;
                                    break;
                                }
                            }
                            if (!alreadyInPropList) {
                                propObj.layers[k].props.push(selectedProps[m]);
                            }
                        }
                        alreadyInList = true;
                        break;
                    }
                }
                if (!alreadyInList) {
                    layer = selectedLayers[i];
                    propObj.layers.push({
                        name: layer.name,
                        matchName: layer.matchName,
                        index: layer.index,
                        props: getProps(layer)
                    });
                }
            }
        }
        catch (e) {
            alert('Select some keyframes.', scriptName);
            return;
        }
        propObj.firstKeyTime = firstKeyTime;
        propObj.lastKeyTime = lastKeyTime;
        return propObj;
        function getProps(layer) {
            var propCollect = [];
            for (var k = 0; k < layer.selectedProperties.length; k++) {
                prop = layer.selectedProperties[k];
                if (prop.canVaryOverTime &&
                    prop.selectedKeys.length > 1) {
                    var selKeys = prop.selectedKeys;
                    for (var m = 0; m < selKeys.length - 1; m++) {
                        propCollect.push({
                            obj: prop,
                            threeDLayer: layer.threeDLayer || (layer instanceof CameraLayer),
                            propertyValueType: prop.propertyValueType,
                            name: prop.name,
                            matchName: prop.matchName,
                            dur: prop.keyTime(selKeys[m + 1]) - prop.keyTime(selKeys[m]),
                            startTime: prop.keyTime(selKeys[m]),
                            startValue: prop.keyValue(selKeys[m]),
                            startTemporalEase: prop.keyOutTemporalEase(selKeys[m])[0],
                            startEaseType: prop.keyOutInterpolationType(selKeys[m]),
                            endTime: prop.keyTime(selKeys[m + 1]),
                            endValue: prop.keyValue(selKeys[m + 1]),
                            endTemporalEase: prop.keyInTemporalEase(selKeys[m + 1])[0],
                            endEaseType: prop.keyInInterpolationType(selKeys[m + 1]),
                            duration: prop.keyTime(selKeys[m + 1]) - prop.keyTime(selKeys[m])
                        });
                    }
                    firstKeyTime = Math.min(firstKeyTime, propCollect[0].startTime);
                    lastKeyTime = Math.max(lastKeyTime, propCollect[propCollect.length - 1].endTime);
                }
            }
            return propCollect;
        }
    }
    function getPropText(propObj) {
        return [
            'Total Dur: ' + timeToMs(propObj.lastKeyTime - propObj.firstKeyTime),
            '',
            buildTextBlock(propObj)
        ].join('\n');
    }
    function buildCounter() {
        try {
            var dynText = thisComp.layers.addText('Spec Name');
            dynText.name = 'Counter';
            dynText.comment = scriptName + '_data';
            var dynText_TextProp = dynText('ADBE Text Properties')('ADBE Text Document');
            var dynText_TextDocument = dynText_TextProp.value;
            dynText_TextDocument.resetCharStyle();
            dynText_TextDocument.fontSize = thisComp.width / 30;
            dynText_TextDocument.font = 'CourierNewPS-BoldMT';
            dynText_TextDocument.applyFill = true;
            dynText_TextDocument.fillColor = [0.5, 0.5, 0.5];
            dynText_TextDocument.applyStroke = false;
            dynText_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
            dynText_TextDocument.tracking = -30;
            if (parseFloat(app.version) >= 13.2) {
                dynText_TextDocument.verticalScale = 1;
                dynText_TextDocument.horizontalScale = 1;
                dynText_TextDocument.baselineShift = 0;
                dynText_TextDocument.tsume = 0;
            }
            dynText_TextProp.setValue(dynText_TextDocument);
            dynText_TextProp.setValue('\u25ba');
            var manualLineHeight = 10;
            var lineHeight = dynText('ADBE Text Properties')(4).addProperty('ADBE Text Animator');
            lineHeight.name = 'Line Height';
            lineHeight('ADBE Text Animator Properties').addProperty('ADBE Text Line Spacing');
            lineHeight(1).addProperty('ADBE Text Selector');
            lineHeight(2)('ADBE Text Line Spacing').setValue([0, manualLineHeight]);
            dynText('ADBE Transform Group')('ADBE Position').setValue([100, 100]);
            return dynText;
        }
        catch (e) {
            alert([
                e.toString(),
                'Error on line: ' + e.line.toString()
            ].join('\n'), scriptName);
        }
    }
    function getEase(activeProp) {
        try {
            var dims = (activeProp.obj.value instanceof Array) ? activeProp.obj.value.length : 1;
            var k1 = activeProp.startValue;
            var k2 = activeProp.endValue;
            var valChange;
            if (dims == 1 || activeProp.propertyType == PropertyType.PROPERTY) {
                valChange = k2 - k1;
            }
            else {
                if (activeProp.matchName.indexOf('Size') != -1) {
                    valChange = 100000000000000;
                }
                else {
                    valChange = Math.sqrt(Math.pow(k2[0] - k1[0], 2) + Math.pow(k2[1] - k1[1], 2));
                }
            }
            var keyOutSpeed = activeProp.startTemporalEase.speed;
            var keyInSpeed = activeProp.endTemporalEase.speed;
            if (keyOutSpeed < 0) {
                keyOutSpeed *= -1;
            }
            if (keyInSpeed > 0) {
                keyInSpeed *= -1;
            }
            var y1Mult = (activeProp.startTemporalEase.speed > 0) ? 1 : -1;
            var y2Mult = (activeProp.endTemporalEase.speed > 0) ? 1 : -1;
            var x1 = activeProp.startTemporalEase.influence / 100;
            var y1 = (keyOutSpeed * x1) * (activeProp.duration / valChange) * y1Mult;
            var x2 = 1 - activeProp.endTemporalEase.influence / 100;
            var y2 = 1 - (keyInSpeed * (x2 - 1)) * (activeProp.duration / valChange) * y2Mult;
            if (activeProp.startEaseType == KeyframeInterpolationType.LINEAR && activeProp.endEaseType == KeyframeInterpolationType.LINEAR) {
                return 'Linear';
            }
            else if (activeProp.startEaseType == KeyframeInterpolationType.HOLD) {
                return 'Hold';
            }
            else if (isNaN(y1)) {
                return 'No Change';
            }
            else {
                return '(' + round(x1) + ', ' + round(y1) + ', ' + round(x2) + ', ' + round(y2) + ')';
            }
        }
        catch (e) {
            return '()';
        }
    }
    function resizeCompNew(work_comp) {
        for (var i = 1; i <= work_comp.layers.length; i++) {
            if (thisComp.layers[i].comment === scriptName + '_panel') {
                return;
            }
        }
        createISTfolder();
        thisComp = work_comp.duplicate();
        thisComp.parentFolder = inspectorFolder;
        thisComp.name = work_comp.name + '_Spec';
        thisComp.openInViewer();
        panelSize = [Math.floor(thisComp.height / 3), thisComp.height];
        leftEdge = thisComp.width;
        thisComp.width = leftEdge + panelSize[0];
        try {
            var compInfo = thisComp.layers.addShape();
            compInfo.name = 'Spec Panel 1';
            compInfo.comment = scriptName + '_panel';
            compInfo.label = 0;
            var shapeGroup = compInfo('ADBE Root Vectors Group').addProperty('ADBE Vector Group');
            shapeGroup.name = 'Rectangle 1';
            var rect = shapeGroup(2).addProperty('ADBE Vector Shape - Rect');
            rect('ADBE Vector Rect Size').setValue(panelSize);
            rect('ADBE Vector Rect Position').setValue(panelSize / 2);
            var stroke = shapeGroup(2).addProperty('ADBE Vector Graphic - Stroke');
            stroke.enabled = false;
            stroke('ADBE Vector Stroke Width').setValue(6);
            var fill = shapeGroup(2).addProperty('ADBE Vector Graphic - Fill');
            fill('ADBE Vector Fill Color').setValue([0.08203125, 0.5625, 0.91796875, 1]);
            var shapeGroup2 = compInfo('ADBE Root Vectors Group').addProperty('ADBE Vector Group');
            shapeGroup2.name = 'Admin';
            shapeGroup2(3)('ADBE Vector Scale').setValue(panelSize);
            compInfo('ADBE Transform Group')('ADBE Position').setValue([leftEdge, 0]);
        }
        catch (e) {
            alert([
                e.toString(),
                'Error on line: ' + e.line.toString()
            ].join('\n'), scriptName);
        }
        margin = Math.floor(panelSize[0] / 18);
        panelSize -= margin * 2;
        leftEdge += margin;
    }
    function round(value, opt_decimals) {
        try {
            var decimals = (opt_decimals !== undefined) ? opt_decimals : 2;
            return parseFloat(value.toFixed(decimals));
        }
        catch (e) {
            return value;
        }
    }
    function roundArray(array, opt_decimals) {
        if (!(array instanceof Array)) {
            return round(array, opt_decimals);
        }
        var rounded = [];
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            var roundedElement = round(element, opt_decimals);
            rounded.push(roundedElement);
        }
        return rounded;
    }
    function createISTfolder() {
        var hasRedlineFolder = false;
        for (var i = 1; i <= app.project.numItems; i++) {
            if (app.project.item(i) instanceof FolderItem) {
                if (app.project.item(i).name == scriptName) {
                    hasRedlineFolder = true;
                    inspectorFolder = app.project.item(i);
                    break;
                }
            }
        }
        if (!hasRedlineFolder) {
            inspectorFolder = app.project.items.addFolder(scriptName);
        }
    }
    function getPanelSize() {
        for (var i = 1; i <= thisComp.layers.length; i++) {
            if (thisComp.layer(i).comment == scriptName + '_panel') {
                panelSize = thisComp.layer(i)('ADBE Root Vectors Group')(2)(3)('ADBE Vector Scale').value;
                margin = Math.floor(panelSize[0] / 18);
                leftEdge = thisComp.layer(i)('ADBE Transform Group')('ADBE Position').value[0] + margin;
                dataSize = [panelSize[0] - margin * 2, panelSize[1] - margin * 2];
                return;
            }
        }
    }
    function getValChange(activeProp) {
        switch (activeProp.obj.matchName) {
            case 'ADBE Scale':
                return valScale(activeProp);
            case 'ADBE Position_0':
                return valXPosition(activeProp);
            case 'ADBE Position_1':
                return valXPosition(activeProp);
            case 'ADBE Position':
                return valPosition(activeProp);
            case 'ADBE Rotate Z':
                return valRotation(activeProp);
            case 'ADBE Opacity':
                return valOpacity(activeProp);
            case 'ADBE Mask Shape':
                return 'Mask data unsupported';
            case 'ADBE Vector Shape':
                return 'Path data unsupported';
            default:
                return valGeneric(activeProp);
        }
    }
    function valPosition(activeProp) {
        var a = activeProp.startValue;
        var b = activeProp.endValue;
        var aRounded = roundArray(a);
        var bRounded = roundArray(b);
        if (!activeProp.threeDLayer) {
            aRounded.length = 2;
            bRounded.length = 2;
        }
        return JSON.stringify(aRounded) + '››' + JSON.stringify(bRounded);
    }
    function valXPosition(activeProp) {
        var a = activeProp.startValue;
        var b = activeProp.endValue;
        var pixelMult = ddl_resolution.selection.index + 1;
        if (rad_pos.children[1].value) {
            var vectDist = (b - a) / pixelMult;
            return (Math.round(vectDist) + 'dp');
        }
        else {
            return (round(a, 2) + '››' + round(b, 2));
        }
    }
    function valOpacity(activeProp) {
        var a = activeProp.startValue;
        var b = activeProp.endValue;
        return (round(a, 2) + '% ››› ' + round(b, 2) + '%');
    }
    function valRotation(activeProp) {
        var a = activeProp.startValue;
        var b = activeProp.endValue;
        return round(a) + '° ››› ' + round(b) + '°';
    }
    function valScale(activeProp) {
        var a = activeProp.startValue;
        var b = activeProp.endValue;
        var single = (round(a[0]) == round(a[1]) && round(b[0]) == round(b[1])) ? true : false;
        if (single) {
            return (round(a[0]) + '% ›› ' + round(b[0]) + '%');
        }
        else {
            var aRounded = roundArray(a);
            var bRounded = roundArray(b);
            if (!activeProp.threeDLayer) {
                aRounded.length = 2;
                bRounded.length = 2;
            }
            return JSON.stringify(aRounded) + '%››' + JSON.stringify(bRounded) + '%';
        }
    }
    function valGeneric(activeProp) {
        var a = activeProp.startValue;
        var b = activeProp.endValue;
        if (a instanceof Array) {
            var single = (round(a[0]) == round(a[1]) && round(b[0]) == round(b[1])) ? true : false;
            if (single) {
                return (round(a[0]) + ' ›› ' + round(b[0]));
            }
            else {
                var aRounded = roundArray(a);
                var bRounded = roundArray(b);
                if (!activeProp.threeDLayer) {
                    aRounded.length = 2;
                    bRounded.length = 2;
                }
                return JSON.stringify(aRounded) + '››' + JSON.stringify(bRounded);
            }
        }
        else {
            return (round(a, 2) + '››' + round(b, 2));
        }
    }
    function buildIsoLayer() {
        var isolationLayer = thisComp.layers.addShape();
        isolationLayer.name = '\u2193\u2193 Isolation \u2193\u2193';
        isolationLayer.label = 0;
        isolationLayer.adjustmentLayer = true;
        var shapeGroup = isolationLayer('ADBE Root Vectors Group').addProperty('ADBE Vector Group');
        shapeGroup.name = 'Rectangle 1';
        var rect = shapeGroup(2).addProperty('ADBE Vector Shape - Rect');
        rect('ADBE Vector Rect Size').setValue([thisComp.width, thisComp.height]);
        var stroke = shapeGroup(2).addProperty('ADBE Vector Graphic - Stroke');
        stroke.enabled = false;
        stroke('ADBE Vector Stroke Width').setValue(3);
        var fill = shapeGroup(2).addProperty('ADBE Vector Graphic - Fill');
        fill('ADBE Vector Fill Color').setValue([0, 0, 0, 1]);
        var tint = isolationLayer('ADBE Effect Parade').addProperty('ADBE Tint');
        tint('ADBE Tint-0001').setValue([0.3, 0.3, 0.3, 1]);
        tint('ADBE Tint-0002').setValue([0.35, 0.35, 0.35, 1]);
    }
    function buildPointer() {
        try {
            if (leftEdge == undefined) {
                alert('Gotta create a spec panel first.', scriptName);
                return;
            }
            var pointer1 = thisComp.layers.addShape();
            pointer1.name = 'Pointer 1';
            pointer1.label = 2;
            var shapeGroup = pointer1('ADBE Root Vectors Group').addProperty('ADBE Vector Group');
            shapeGroup.name = 'Pointer';
            shapeGroup(2).addProperty('ADBE Vector Shape - Rect');
            var trim = shapeGroup(2).addProperty('ADBE Vector Filter - Trim');
            trim('ADBE Vector Trim End').setValue(25);
            trim('ADBE Vector Trim Offset').setValue(-90);
            var gradFill = shapeGroup(2).addProperty('ADBE Vector Graphic - G-Fill');
            gradFill.enabled = false;
            shapeGroup(3)('ADBE Vector Anchor').setValue([0, -50]);
            shapeGroup(3)('ADBE Vector Position').setValue([-580, 0]);
            shapeGroup(3)('ADBE Vector Scale').setValue([100, 100]);
            var shapeGroup2 = pointer1('ADBE Root Vectors Group').addProperty('ADBE Vector Group');
            shapeGroup2.name = 'Arm';
            shapeGroup2(2).addProperty('ADBE Vector Shape - Rect');
            var trim2 = shapeGroup2(2).addProperty('ADBE Vector Filter - Trim');
            trim2('ADBE Vector Trim End').setValue(50);
            trim2('ADBE Vector Trim Offset').setValue(180);
            var gradFill2 = shapeGroup2(2).addProperty('ADBE Vector Graphic - G-Fill');
            gradFill2.enabled = false;
            shapeGroup2(3)('ADBE Vector Anchor').setValue([50, -50]);
            shapeGroup2(3)('ADBE Vector Scale').setValue([564, 349]);
            var stroke = pointer1('ADBE Root Vectors Group').addProperty('ADBE Vector Graphic - Stroke');
            stroke('ADBE Vector Stroke Width').setValue(6);
            stroke('ADBE Vector Stroke Color').setValue([0.4795, 0.4795, 0.4795, 1]);
            var fxPoint = pointer1('ADBE Effect Parade').addProperty('ADBE Point Control');
            fxPoint.name = 'Arm Length';
            fxPoint('ADBE Point Control-0001').setValue([775, 200]);
            var fxSize = pointer1('ADBE Effect Parade').addProperty('ADBE Slider Control');
            fxSize.name = 'Pointer Size';
            fxSize('ADBE Slider Control-0001').setValue(200);
            pointer1('ADBE Transform Group')('ADBE Position').setValue([leftEdge - margin * 2, 192, 0]);
            try {
                pointer1('ADBE Root Vectors Group')(1)(3)('ADBE Vector Position').expression = [
                    'p = effect("Arm Length")("Point");',
                    '[-p[0], p[1]]'
                ].join('\n');
                pointer1('ADBE Root Vectors Group')(1)(3)('ADBE Vector Scale').expression = [
                    's = effect("Pointer Size")("Slider");',
                    '[s, s]'
                ].join('\n');
                pointer1('ADBE Root Vectors Group')(2)(3)('ADBE Vector Scale').expression = 'effect("Arm Length")("Point")';
            }
            catch (err) { }
        }
        catch (e) {
            alert([
                e.toString(),
                'Error on line: ' + e.line.toString()
            ].join('\n'), scriptName);
        }
    }
    function visitURL(url) {
        if ($.os.indexOf('Windows') != -1) {
            system.callSystem('cmd /c "' + Folder.commonFiles.parent.fsName + "\\Internet Explorer\\iexplore.exe" + '" ' + url);
        }
        else {
            var cmd = 'open "' + url + '"';
            system.callSystem(cmd);
        }
    }
    function replacer(key, val) {
        if (key === 'obj') {
            return undefined;
        }
        else {
            return val;
        }
        ;
    }
    ;
    function getUserFile(filename, filter) {
        var defaultPath = Folder.desktop.fullName + '/' + filename;
        var outputFile = new File(defaultPath).saveDlg('Choose output path', filter);
        if (!outputFile) {
            return null;
        }
        return outputFile;
    }
    function writeFile(path, contents) {
        var file = path instanceof File ? path : new File(path);
        file.open('w');
        var writeSuccess = file.write(contents);
        file.close();
        if (!writeSuccess) {
            throw new Error('Could not write file ' + file.toString());
        }
        return file;
    }
    var mainPalette = thisObj instanceof Panel ? thisObj : new Window('palette', scriptName, undefined, { resizeable: true });
    if (mainPalette === null) {
        return;
    }
    mainPalette.alignChildren = ['fill', 'fill'];
    var content = mainPalette.add('group');
    content.alignChildren = ['fill', 'fill'];
    content.orientation = 'column';
    content.spacing = 5;
    var btnLaunch = buttonColorVector(content, icons.build, '#5B8BA3', [224, 64]);
    btnLaunch.maximumSize.height = 64;
    btnLaunch.minimumSize.height = 64;
    btnLaunch.helpTip = 'Select keyframe pairs to build spec panel';
    var grp_options = content.add('group');
    grp_options.orientation = 'row';
    grp_options.alignChildren = ['fill', 'top'];
    grp_options.margins = 0;
    var settings = grp_options.add('group');
    settings.alignment = 'fill';
    settings.alignChildren = ['fill', 'top'];
    settings.orientation = 'column';
    settings.margins = [0, 6, 0, 0];
    var grp_pos = settings.add('panel', undefined, 'Position');
    grp_pos.alignChildren = 'left';
    grp_pos.alignment = 'left';
    grp_pos.orientation = 'column';
    grp_pos.spacing = 0;
    grp_pos.margins = [8, 10, 0, 6];
    grp_pos.maximumSize.width = 110;
    grp_pos.minimumSize.width = 110;
    var rad_pos = grp_pos.add('group');
    var posCoord = rad_pos.add('radiobutton', undefined, 'Pixel');
    posCoord.helpTip = 'Print position as pixel coordinates';
    var posDistance = rad_pos.add('radiobutton', undefined, 'DP');
    posDistance.helpTip = 'Print position as dp movement';
    posDistance.value = true;
    var ddl_resolution = settings.add('dropdownlist', undefined, ['1x', '2x', '3x']);
    ddl_resolution.selection = 2;
    ddl_resolution.maximumSize.width = 110;
    ddl_resolution.minimumSize.width = 110;
    ddl_resolution.alignment = 'left';
    ddl_resolution.helpTip = 'Dp multiplier';
    var grp_buttons = grp_options.add('group');
    grp_buttons.alignChildren = ['fill', 'top'];
    grp_buttons.orientation = 'column';
    grp_buttons.margins = 0;
    grp_buttons.spacing = 1;
    var btn_isolation = buttonColorText(grp_buttons, '#37474F', 'Iso Layer');
    btn_isolation.helpTip = [
        'Create a color adjustment layer',
        'the drag below targeted layers'
    ].join('\n');
    var btn_pointer = buttonColorText(grp_buttons, '#37474F', 'Pointer');
    btn_pointer.helpTip = [
        'Create an adjustable pointer',
        'line to connect text to element'
    ].join('\n');
    var btn_counter = buttonColorText(grp_buttons, '#37474F', 'Counter');
    btn_counter.helpTip = 'Create text counter without building a spec';
    var btn_aboutScript = buttonColorText(grp_buttons, '#263238', '?');
    btn_aboutScript.helpTip = 'About ' + scriptName;
    btn_aboutScript.minimumSize = [30, 30];
    btn_aboutScript.maximumSize = [30, 30];
    btn_aboutScript.alignment = ['right', 'bottom'];
    posCoord.onClick = function () {
        ddl_resolution.visible = false;
    };
    posDistance.onClick = function () {
        ddl_resolution.visible = true;
    };
    btn_aboutScript.onClick = function () {
        var w = new Window('dialog', 'About ' + scriptName);
        w.spacing = 0;
        w.margins = 0;
        var content = w.add('group', undefined, '');
        content.alignChildren = ['fill', 'fill'];
        content.orientation = 'column';
        content.alignment = ['left', 'top'];
        content.margins = 16;
        content.spacing = 8;
        var btn_url = buttonColorVector(content, icons.build, '#EF5350', [224, 64]);
        content.add('statictext', [0, 0, 400, 340], [
            'Speed up the creation of animation specs for engineering while reducing miscommunication. One click to collect selected keyframe pair data to a text panel. Copy/paste this text out or build a panel along side the comp for easy reference.',
            '',
            'Usage:',
            '• Click the big button to open the property collection panel.',
            '• Additional key pairs will be added to the list, grouped by layer. The total duration and individual propery delays will update.',
            '• Copy out this text or create a panel along side a duplicate of your comp.',
            '',
            'Add ons:',
            '• Pixel/DP: This data can be communicated as coordinates or in DP. Set the density dropdown based on resolution of your comp.',
            '• ISO LAYER: Creates an adjustment layer below the selected layer to dims other layers. This allows layers to be hilighted while keeping things in context.',
            '• POINTER: Creates an editable arrow to quickly draw a line from the text spec to on-screen element.',
            '',
            scriptName + ' - v' + scriptVersion,
            'Created by Adam Plouff at Google'
        ].join('\n'), {
            multiline: true
        });
        buttonColorText(content, '#406280', 'Close');
        btn_url.onClick = function () {
            visitURL('http://google.github.io/inspectorspacetime');
        };
        w.show();
    };
    btn_isolation.onClick = function () {
        setComp();
        app.beginUndoGroup('New Isolation Layer');
        buildIsoLayer();
        app.endUndoGroup();
    };
    btn_pointer.onClick = function () {
        setComp();
        getPanelSize();
        app.beginUndoGroup('New Pointer');
        buildPointer();
        app.endUndoGroup();
    };
    btn_counter.onClick = function () {
        setComp();
        var keyRange = getKeyRange();
        if (keyRange[0] == 9999999) {
            keyRange = [thisComp.time, thisComp.time + 1];
        }
        app.beginUndoGroup('New Counter');
        var textLayer = buildCounter();
        setTimeMarkers(textLayer, keyRange[0], keyRange[1]);
        textLayer('ADBE Text Properties')('ADBE Text Document').expression = exp_counter;
        app.executeCommand(2771);
        app.executeCommand(2771);
        app.endUndoGroup();
    };
    btnLaunch.onClick = function () {
        try {
            var w = new Window('palette', scriptName, undefined, { resizeable: true });
            w.alignChildren = ['fill', 'fill'];
            var propObj = getPropObj();
            var propText = getPropText(propObj);
            var tpanel = w.add('tabbedpanel');
            tpanel.alignChildren = ['fill', 'fill'];
            tpanel.minimumSize = [350, 300];
            tpanel.maximumSize.height = 800;
            var tab_text = tpanel.add('tab', undefined, 'Text');
            tab_text.alignChildren = ['fill', 'fill'];
            var textField = tab_text.add('edittext', undefined, '', { multiline: true });
            textField.text = propText;
            var tab_json = tpanel.add('tab', undefined, 'JSON');
            tab_json.alignChildren = ['fill', 'fill'];
            var jsonField = tab_json.add('edittext', [0, 0, 350, 300], '', { multiline: true });
            jsonField.text = JSON.stringify(propObj, replacer, 2);
            if (propObj.firstKeyTime == 9999999) {
                clearProps();
            }
            var buttons = w.add('group');
            buttons.alignment = 'right';
            buttons.minimumSize.height = 28;
            buttons.maximumSize.height = 28;
            var btn_clearProp = buttons.add('button', undefined, '⊗ Clear ⊗');
            var btn_addProp = buttons.add('button', undefined, '↑ Add property ↑');
            var btn_newSidePanel = buttons.add('button', undefined, '→ Create side panel →');
            var btn_exportJson = buttons.add('button', undefined, '⤵ Export ⤵');
            btn_clearProp.onClick = function () {
                clearProps();
            };
            btn_addProp.onClick = function () {
                propObj = getPropObj(propObj);
                jsonField.text = JSON.stringify(propObj, replacer, 2);
                propText = getPropText(propObj);
                textField.text = propText;
            };
            btn_newSidePanel.onClick = function () {
                try {
                    app.beginUndoGroup('Create ' + scriptName + 'Elements');
                    resizeCompNew(thisComp);
                    getPanelSize();
                    buildText_plain(textField.text);
                    app.executeCommand(2771);
                    app.executeCommand(2771);
                    app.endUndoGroup();
                }
                catch (e) {
                    alert([
                        e.toString(),
                        'Error on line: ' + e.line.toString()
                    ].join('\n'), scriptName);
                }
            };
            btn_exportJson.onClick = function () {
                var propObj = getPropObj(propObj);
                propObj.spacetimeVersion = scriptVersion;
                propObj.aeVersion = app.version;
                var outputFile = getUserFile('spec.spacetime.json', 'spacetime:*.spacetime.json;');
                if (!outputFile) {
                    return;
                }
                try {
                    var writtenFile = writeFile(outputFile, JSON.stringify(propObj, replacer, 2));
                    alert('Wrote file to ' + writtenFile.fsName, scriptName);
                }
                catch (e) {
                    alert(e, scriptName);
                }
            };
            function clearProps() {
                propObj = null;
                propText = null;
                jsonField.text = '';
                textField.text = '';
            }
            w.layout.layout(true);
            w.layout.resize();
            w.onResizing = w.onResize = function () { w.layout.resize(); };
            w.show();
        }
        catch (e) {
            alert([
                e.toString(),
                'Error on line: ' + e.line.toString()
            ].join('\n'));
        }
    };
    mainPalette.layout.layout(true);
    mainPalette.layout.resize();
    mainPalette.onResizing = mainPalette.onResize = function () {
        mainPalette.layout.resize();
    };
    if (!(mainPalette instanceof Panel)) {
        mainPalette.show();
    }
})(this);
