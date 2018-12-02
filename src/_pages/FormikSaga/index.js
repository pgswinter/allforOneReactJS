import React from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';

export class MyForm extends React.Component {
  
  handleSubmit = (values, { 
    props = this.props, 
    setSubmitting 
  }) => {
     
    console.log(values);
    alert('Form Submitted');
    setSubmitting(false);
    return;
  }
   
  render() {
    return(
      <Formik
        initialValues={{
           first_name: '',
           email_address: '',
           gender: ''
        }}
        validate={(values) => {
          let errors = [];
      
          if(!values.email)
             errors.email = "Email Address Required";
              
             //check if my values have errors
             return errors;
        }}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return(
            <Form>
               <Field 
                 type="text" 
                 name="first_name" 
                 placeholder="First Name" 
               /> 
               <ErrorMessage name="first_name" />
                
                <Field 
                  type="text" 
                  name="email" 
                  placeholder="Email address" 
			         	/> 
                <ErrorMessage name="email" />

                <Field
                  name="gender" 
                  component="select" 
                  placeholder="Your Gender">   
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                </Field>
		
		<ErrorMessage name="gender" />
                                
                <button 
                  type="submit" 
                  disabled={formProps.isSubmitting}>
                    Submit Form
                 </button>
              </Form>
           );
        }}
     />);
   }
}

// import React from 'react';
// import { Formik, FormikProps, Form, Field } from 'formik';

// class FormikSaga extends React.Component{

//     handleSubmit = (values,{
//         props = this.props,
//         setSubmitting
//     }) => {
//         setSubmitting(false)
//         return;
//     }

//     render(){
//         return(
//             <Formik>
//                 initialValues={
//                     {
//                         first_name: '',
//                         email_address: '',
//                         gender: ''
//                     }
//                 }
//                 validate={(values)=>{
//                     let errors = [];
//                     //check if my values have errors
//                     return errors;
//                 }}
//                 onSubmit={this.handleSubmit}
//                 render={
//                     (formProps: FormikProps) =>{
//                         <Form>
//                             <Field ... />
//                             <Field ... />
//                             <Field ... />
//                             <button 
//                             type="submit" 
//                             disabled={formProps.isSubmitting}>
//                                 Submit Form
//                             </button>    
//                         <Form>
//                 }}
//             </Formik>
//         )
//     }
// }

// export default FormikSaga