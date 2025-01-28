import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react"
import styles from "./MaterialForm.module.scss";

type TFormData = {
    username: string;
    email: string;
}

export const FormComponent:React.FC = ()=>{
    const [formData, setFormData] = useState<TFormData>({
        username: '',
        email: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formData);
        setFormData({
            username: '',
            email: ''
        });
        alert(`Form submitted!\nUsername: ${formData.username}\nEmail: ${formData.email}`);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    return (
        <Box className={styles.formContainer}>
            <Typography variant="h4" className={styles.title}>
                Material-UI Form
            </Typography>
            <form onSubmit={handleSubmit} className={styles.form}>
                <TextField
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                 <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={styles.submitButton}
                >
                    Submit
                </Button>
            </form>
        </Box>
    )
}