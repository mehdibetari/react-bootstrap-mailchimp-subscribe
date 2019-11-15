import React from "react";

// a basic form
const SimpleForm = ({ status, message, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
    <div className="form-row">
      <div className="col-8">
        <input
          ref={node => (input = node)}
          type="email"
          placeholder="Votre email"
          />
          {status === "sending" && <small style={{ color: "blue" }} className="form-text text-muted">sending...</small>}
          {status === "error" && (
            <small
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
              className="form-text text-muted"
            />
          )}
          {status === "success" && (
            <small
              style={{ color: "green" }}
              dangerouslySetInnerHTML={{ __html: message }}
              className="form-text text-muted"
            />
          )}
        {!status && <small id="emailHelp" className="form-text text-muted">Vous recevrez votre invitation 48h avant la vente.</small>}
      </div>
      <div className="col">
        <button onClick={submit} className="btn btn-info">➜</button>
      </div>
    </div>
  );
};

export default SimpleForm;
