"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Inqoil;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _reactDragDropFiles = require("react-drag-drop-files");

var _supabaseJs = require("@supabase/supabase-js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Inqoil(_ref) {
  let {
    supabaseUrl,
    supabaseAnonKey,
    handlesChange,
    bucket,
    folder,
    fileName,
    disabled,
    hoverTitle,
    types,
    onTypeError,
    classes,
    maxSize,
    onSizeError
  } = _ref;
  var formData;

  _react.default.useEffect(() => {
    formData = new FormData();
  });

  const [file, setFile] = (0, _react.useState)(null);

  const handleChange = async file => {
    formData = new FormData();
    formData.append("File", file);
    formData.append("fileName", fileName);
    formData.append("supabaseUrl", supabaseUrl);
    formData.append("supabaseAnonKey", supabaseAnonKey);
    formData.append("bucket", bucket);
    formData.append("folder", folder);
    const options = {
      method: "PUT",
      body: formData
    };
    const res = await fetch("http://localhost:5000", options);
    const Res = await res.json();
    handlesChange(Res);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactDragDropFiles.FileUploader, {
    handleChange: handleChange,
    name: "file",
    disabled: disabled ? disabled : false,
    hoverTitle: hoverTitle ? hoverTitle : "Drop here",
    types: types ? types : undefined,
    onTypeError: onTypeError ? onTypeError : () => {
      alert("File type not supported");
    },
    classes: classes ? classes : "",
    maxSize: maxSize ? maxSize : 10,
    onSizeError: onSizeError ? onSizeError : () => {
      alert("File exceeds max size limitation");
    }
  }));
}