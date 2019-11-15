import React from "react";

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

  return React.createElement(
    "div",
    { className: "form-row" },
    React.createElement(
      "div",
      { className: "col-8" },
      React.createElement("input", {
        ref: function ref(node) {
          return input = node;
        },
        type: "email",
        placeholder: "Votre email",
        className: "form-control",
        "aria-describedby": "emailHelp"
      }),
      status === "sending" && React.createElement(
        "small",
        { style: { color: "blue" }, className: "form-text text-muted" },
        "sending..."
      ),
      status === "error" && React.createElement("small", {
        style: { color: "red" },
        dangerouslySetInnerHTML: { __html: message },
        className: "form-text text-muted"
      }),
      status === "success" && React.createElement("small", {
        style: { color: "green" },
        dangerouslySetInnerHTML: { __html: message },
        className: "form-text text-muted"
      }),
      !status && React.createElement(
        "small",
        { id: "emailHelp", className: "form-text text-muted" },
        "Vous recevrez votre invitation 48h avant la vente."
      )
    ),
    React.createElement(
      "div",
      { className: "col" },
      React.createElement(
        "button",
        { onClick: submit, className: "btn btn-info" },
        "\u279C"
      )
    )
  );
};

export default SimpleForm;