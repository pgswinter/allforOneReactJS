import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const firstFormilk = () => (
    <div className="firstFormik">
        <Formik
            initialValues={{email: ''}}
            onSubmit={(values,{setSubmitting}) => {
                setTimeout(()=>{
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 0);
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email().required('Required')
            })}
            // validate={values => {
            //     let errors = {};
            //     if (!values.email) {
            //     errors.email = 'Required';
            //     } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //     ) {
            //     errors.email = 'Invalid email address';
            //     }
            //     return errors;
            // }}
        >   
            {
                ({dirty,isSubmitting,handleReset}) =>(
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <button type="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >
                            Reset
                        </button>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )
            }
            {/* -- THE WAY 01 --- props => {
                const {
                    values, // return "value" string of initialValues item is using
                    touched, // return true if be touched input
                    errors, // return "error" string of initialValues item is using
                    dirty, // return false if input have text and otherwise. Just a notify
                    isSubmitting, // return true or false. Notify click or not
                    handleChange, // allow change text of input
                    handleBlur, // display validation (errors) after handleReset. Click click once more time, input will be cleared
                    handleSubmit, // TODO something when submit button
                    handleReset // clear text of input
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            id="email"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.email && touched.email ? 'text-input errors':'text-input'
                            }
                        />
                        {--- There is comment: Code launch error condition ---}
                        {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
                        <button type="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >
                            Reset
                        </button>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )
            } */}
        </Formik>
    </div>
)