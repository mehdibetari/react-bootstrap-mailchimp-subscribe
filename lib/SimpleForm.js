"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// a basic form
var SimpleForm = function SimpleForm(_ref) {
  var status = _ref.status,
      message = _ref.message,
      onSubmitted = _ref.onSubmitted;

  var input = void 0;
  var submit = function submit() {
    return input && input.value.indexOf("@") > -1 && onSubmitted({
      EMAIL: input.value
    });
  };

  return _react2.default.createElement(
    "div",
    { className: "form-row" },
    _react2.default.createElement(
      "div",
      { className: "col-8" },
      _react2.default.createElement("input", {
        ref: function ref(node) {
          return input = node;
        },
        type: "email",
        placeholder: "Votre email"
      }),
      status === "sending" && _react2.default.createElement(
        "small",
        { style: { color: "blue" }, className: "form-text text-muted" },
        "sending..."
      ),
      status === "error" && _react2.default.createElement("small", {
        style: { color: "red" },
        dangerouslySetInnerHTML: { __html: message },
        className: "form-text text-muted"
      }),
      status === "success" && _react2.default.createElement("small", {
        style: { color: "green" },
        dangerouslySetInnerHTML: { __html: message },
        className: "form-text text-muted"
      }),
      !status && _react2.default.createElement(
        "small",
        { id: "emailHelp", className: "form-text text-muted" },
        "Vous recevrez votre invitation 48h avant la vente."
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "col" },
      _react2.default.createElement(
        "button",
        { onClick: submit, className: "btn btn-info" },
        "\u279C"
      )
    )
  );
};

exports.default = SimpleForm;
module.exports = exports["default"];