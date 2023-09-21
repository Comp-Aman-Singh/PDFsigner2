import { Heading } from "@chakra-ui/react";
import React from "react";

function SignPdf() {
  return (
    <div className="funtional-body-wrapper">
      <form className="functional-form">
        <Heading className="text-center">Sign PDF</Heading>
        <br />
        <p className="Functional-text">
          Sign yourself or request electronic signatures from others.
        </p>

        <input type="file" hidden id="uploadfile" />
        <label className="upload-btn" htmlFor="uploadfile">
          SIGN PDF
        </label>
      </form>
    </div>
  );
}

export default SignPdf;
