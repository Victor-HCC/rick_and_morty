// function validation(form, errors, setErrors) {
//     if(!form.email) {
//       setErrors({...errors, email: 'Email vacío'});
//     } else if(form.email.length > 35) {
//       setErrors({...errors, email: 'No puede superar los 35 caracteres'})
//     } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
//       setErrors({...errors, email: 'Email inválido'});
//     } else {
//       setErrors({...errors, email: ''});
//     }


//     if(!form.password) setErrors({...errors, password: 'Password vacío'});
//     else if(/^(?=.*\d)[a-zA-Z0-9]{6,10}$/.test(form.password)) {
//         setErrors({...errors, password: ''});
//     } else {
//         setErrors({...errors, password: 'Password inválido'});
//     }
// }

function validation(form, errors, setErrors) {
  if (!form.email) {
    setErrors((prevState) => ({ ...prevState, email: "Email vacío" }));
  } else if (!/^[a-zA-Z0-9._%+-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
    setErrors((prevState) => ({ ...prevState, email: "Email inválido o tiene mas de 35 caracteres" }));
  } else {
    setErrors((prevState) => ({ ...prevState, email: "" }));
  }

  if (!form.password) {
    setErrors((prevState) => ({ ...prevState, password: "Password vacío" }));
  } else if (!/^(?=.*\d)[a-zA-Z0-9]{6,10}$/.test(form.password)) {
    setErrors((prevState) => ({ ...prevState, password: "Password inválido, debe ser entre 6 y 10 caracteres y tener al menos un número" }));
  } else {
    setErrors((prevState) => ({ ...prevState, password: "" }));
  }
}


export default validation;