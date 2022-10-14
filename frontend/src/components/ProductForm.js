import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import ProductApi from "../data/ProductApi";
import { Link } from "react-router-dom";

const initialValues = {
  Name: "",
  Quantity: "",
  Price: ""
};

const validationSchema = Yup.object({
  Name: Yup.string().required("Product Name is Required"),
  Quantity: Yup.string().required("Required"),
  Price: Yup.string().required("Required")
});
const onSubmit = (values, { setSubmitting }) => {
  let product = {};
  product.Name = values.Name;
  product.Quantity = values.Quantity;
  product.Price = values.Price;
  ProductApi.saveProduct(product);

  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export default function ProductForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-control">
            <label htmlFor="Name">*Product Name</label>
            <Field type="text" name="Name" id="Name" placeholder="Name" />
            <ErrorMessage name="Name">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
            <br />

            <label htmlFor="Quantity">*Quantity</label>

            <Field type="number" name="Quantity" id="Quantity"></Field>

            <ErrorMessage name="Quantity">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
            <br />

            <label htmlFor="Price">*Price</label>

            <Field type="number" name="Price" id="Price"></Field>

            <ErrorMessage name="Price">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <br />
          <br />
          <Link to="/">Back</Link>
        </Form>
      )}
    </Formik>
  );
}
