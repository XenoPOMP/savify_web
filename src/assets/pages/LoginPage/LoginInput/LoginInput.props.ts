import React from "react";

export interface LoginInputProps {
  label: string;
  placeholder: string;
  useState: {
    state: string
    setState: React.Dispatch<string>
  }
}
