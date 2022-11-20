import classNames from "classnames";
import React, { HTMLProps } from "react";
import classes from "./TextArea.module.css";

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, className, ...props }) => {
  return (
    <div className={[classes.root, className].join(" ")}>
      {label && <label className={classes.label}>{label}</label>}
      <textarea
        className={classNames(classes.textarea, className)}
        {...props}
      />
    </div>
  );
};

export default TextArea;
