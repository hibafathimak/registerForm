import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, TextField, FormHelperText } from '@mui/material'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';



function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
const [firstName,setFirstName]=useState('')
const [lastName,setLastName]=useState('')
let date=Date()
const [dob,setDob]=useState(dayjs(date))
const [email,setEmail]=useState('')
const [gender,setGender]=useState('')
const [address,setAddress]=useState('')
const [phone,setPhone]=useState('')
const [password,setPassword]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')
const [course, setCourse] = useState('');

const [invalidPassword,setInvalidPassword]=useState(false)

const [passwordMatch,setPasswordMatch]=useState(false)

const [invalidPhone,setInvalidPhone]=useState(false)
const [invalidEmail,setInvalidEmail]=useState(false)

  



const userInputValidate=(inputTag)=>{
  const{name,value}=inputTag
  if(name=="phone"){
    setPhone(value)
    !!value.match(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/) ? setInvalidPhone(false) :setInvalidPhone(true)
  }
  if(name=="email"){
    setEmail(value)
    !!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? setInvalidEmail(false): setInvalidEmail(true)
  }
  if(name=="password"){
    setPassword(value)
    !!value.match(/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/) ? setInvalidPassword(false):setInvalidPassword(true)
  }
  if(name=="confirmPassword"){
    setConfirmPassword(value)
    !!value.match(/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/) ? setInvalidPassword(false):setInvalidPassword(true)
  }
}

  const handleReset=()=>{
    setConfirmPassword('')
    setFirstName('')
    setCourse('')
    setAddress('')
    setLastName('')
    setPhone('')
    setDob(dayjs(date))
    setGender('')
    setPassword('')
    setEmail('')
    setInvalidEmail(false)
    setInvalidPassword(false)
    setInvalidPhone(false)
    setPasswordMatch(false)
  }

  const matchPassword=()=>{
    if(confirmPassword==password)
    {
      setPasswordMatch(false)
    }
  }

  

  const handleSubmit=()=>{
    if(password && confirmPassword && phone && firstName && lastName && address && gender && dob && course )
      {
        if(confirmPassword!=password){
        setPasswordMatch(true)
        }
        else{  
          setPasswordMatch(false)
    
        alert(`Password set!!!
        ----- Please Confirm informations: -----
                    Full Name : ${firstName} ${lastName}
                    Date of Birth : ${dob.$d.getMonth()+1} / ${dob.$d.getDate()} / ${dob.$d.getFullYear()}
                    Course : ${course}
                    Gender : ${gender}
                    Email : ${email}
                    Phone : ${phone}
                    Address : ${address}`)
                  
                    handleReset()
                  }
      }
    else
    {
      alert("Please Fill The Form Completely")

    }
    
      
  }
  
  

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className='p-3 d-flex justify-content-center align-items-center' style={{ width: '100%', height: '150vh', backgroundImage: 'url("https://4kwallpapers.com/images/wallpapers/glossy-abstract-3440x1440-9602.jpg")' }}>


          <div id='' className='form-background p-5' >
            <div className='d-flex justify-content-evenly align-items-center'>
              <h3 className='text-center text-uppercase mb-4'>registration form</h3>
              <Button onClick={handleReset} className='mb-4 p-2' color="palette.action.active" ><i class="fa-solid fa-arrow-rotate-right p-0" color='palette.text.primary' ></i></Button>
            </div>

            <h5>Personal Information</h5>

            <div className='d-flex justify-content-evenly'>
              <TextField name='fname' value={firstName || ''} onChange={e=>setFirstName(e.target.value)} className='m-2' color="palette.text.primary" id="outlined-basic" size="small"
                label="First Name" variant="outlined" />
              <TextField name='lname' value={lastName || ''} onChange={e=>setLastName(e.target.value)} className='m-2' color="palette.text.primary" id="outlined-basic" size="small"
                label="Last Name" variant="outlined" />
            </div>
            <div className='d-flex justify-content-evenly'>

              <div className='mx-2 w-50'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker         
                    format='DD/MM/YYYY'
                     onChange={(newValue)=>setDob(newValue)}
                      name='dob' 
                      value={dob} 
                      label="Date of Birth"       
                      slotProps={{ textField: { size: 'small' } }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>

              <FormControl className='w-50 m-2' size="small">

                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={course || ''}
                  name='course'
                  label="Course"
                  onChange={e=>setCourse(e.target.value)}>
                  <MenuItem value={'mearn'}>Mearn Stack</MenuItem>
                  <MenuItem value={'testing'}>Software Testing</MenuItem>
                  <MenuItem value={'python'}>Python</MenuItem>
                </Select>
              </FormControl>

            </div>
            <FormControl className='m-2'>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={gender}
                onChange={e=>setGender(e.target.value)}
              >
                <FormControlLabel color="palette.primary" value="female" control={<Radio />} label="Female" />
                <FormControlLabel color="palette.primary" value="male" control={<Radio />} label="Male" />
                <FormControlLabel color="palette.primary" value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <h5>Contact Information</h5>
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <div className='d-flex justify-content-evenly'>
                <TextField name='email' onChange={e=>{setEmail(e.target.value); userInputValidate(e.target)}} value={email || ''} className='m-2' color="palette.text.primary" id="outlined-basic" size="small"
                  label="Email" variant="outlined" />
           <TextField name='phone' value={phone || ''}  onChange={e=>{setPhone(e.target.value); userInputValidate(e.target)}
                } className='m-2' color="palette.text.primary" id="outlined-basic"
                  size="small"
                  label="Phone" variant="outlined" />
              </div>
              <div className='d-flex justify-content-betweem\n'>
              {       
        invalidEmail && <div className='text-danger mx-5 '>Invalid Email</div>
}     {        invalidPhone && <div className='text-danger ms-5'>Invalid Phone Number</div>
}
              </div>
              <TextField name='address' value={address || ''} onChange={e=>setAddress(e.target.value)} className='m-2' style={{ width: '97%' }} multiline
                rows={4} color="palette.text.primary" id="outlined-basic" label="Address" size="small"
                variant="outlined" />
            </div>
            <h5>Setup Password</h5>

            <div className='d-flex justify-content-evenly'>
              <TextField name='password' value={password ||''} onChange={e=>{setPassword(e.target.value); userInputValidate(e.target);matchPassword()}} className='m-2' color="palette.text.primary" id="outlined-basic" type="password"
                autoComplete="new-password" size="small"
                label="Password" variant="outlined" />

              <TextField name='confirmPassword' value={confirmPassword || ''} onChange={e=>{setConfirmPassword(e.target.value); userInputValidate(e.target);matchPassword()}} className='m-2' color="palette.text.primary" id="outlined-basic" type="password"
                autoComplete="confirm-password" size="small"
                label="Confirm Password" variant="outlined" />
            </div>
            {
              invalidPassword && <p className="text-danger text-bolder">invalid password</p> 
            }
            {
              passwordMatch && <p className="text-danger text-bolder">password and confirm password must be same</p>
            }
            <p className='text-light'>The password contains characters from at least three of the following five categories:
              <ul>
                <li>English uppercase characters (A – Z)
                </li>
                <li>English lowercase characters (a – z)
                </li>
                <li>Base 10 digits (0 – 9)
                </li>
                <li>Non-alphanumeric (For example: !, $, #, or %)
                </li>
                <li>Unicode characters</li>
              </ul>

            </p>
            <Button onClick={handleSubmit}  className='m-2 w-100' color="palette.action.active" variant="contained">Submit</Button>

          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
