import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { userService } from '../services/userService';
import { ConfirmEmailDto } from '../types';
import { useNavigate } from 'react-router-dom';

// TODO : add loading indicator and failed/successed mail validation

function ValidateEmail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = React.useState<string>("");

  const navigate = useNavigate();

  const validateEmail = async (token: string) => {
    const data: ConfirmEmailDto = { token };

    await userService.validateEmail(data);

    navigate("/login");
  }

  /*  React.useEffect(() => {
 
     const validateEmail = async (token: string) => {
       const data: ConfirmEmailDto = { token };
 
       const res = await userService.validateEmail(data);
       console.log(res);
       navigate("/login");
     }
 
     validateEmail(searchParams.get("token") as string);
   }, []); */



  return (
    <div>

    </div>
  )
}

export default ValidateEmail;