import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    makeStyles,
    Grid,
    Button,
    TextField,
    Card,
    CardContent,
    CardHeader,
    MenuItem,
} from '@material-ui/core'
import Background from '../images/background.jpg'
import AvailityLogo from '../images/availity-logo.png'
var UsaStates = require('usa-states').UsaStates;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${Background})`,
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
    },
    registerCard: {
        width: '30%',
        [theme.breakpoints.down('sm')]: {
           width: '80%'
        },
    },
    outterGrid: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    logo: {
        height: '50px',
        backgroundColor: '#616162',
        backgroundImage: `url(${AvailityLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        fontSize: '34px',
        color: 'lightgrey',
        paddingLeft: '50px',
        [theme.breakpoints.only('md')]: {
            backgroundImage: 'none'
        },
    }
}));

const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    npiNumber: Yup.string()
        .min(6, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    streetAddress: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    state: Yup.string()
        .required('Required'),
    zipCode: Yup.string()
        .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, 'Must be a valid zip code')
        .required('Required'),
    phoneNumber: Yup.string()
        .matches(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/, 'Must be a valid phone number')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});
const usStates = new UsaStates();

const Register = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    npiNumber: '',
                    streetAddress: '',
                    state: '',
                    zipCode: '',
                    phoneNumber: '',
                    email: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={values => {
                    // same shape as initial values
                    alert(JSON.stringify(values));
                }}
            >
                {({ values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                }) => (
                    <Grid
                        container
                        justify='center'
                        className={classes.outterGrid}
                    >
                        <Card
                            className={classes.registerCard}
                            maxWidth={false}
                        >
                                <CardHeader
                                    title="Register with Availity"
                                    className={classes.logo}
                        >
                        </CardHeader>
                            <CardContent>
                                <Form>
                                    <Grid>
                                        <TextField
                                            error={errors.firstName && touched.firstName}
                                            label="First Name"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.firstName && touched.firstName) && errors.firstName}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            error={errors.lastName && touched.lastName}
                                            label="Last Name"
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.lastName && touched.lastName) && errors.lastName}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            error={errors.npiNumber && touched.npiNumber}
                                            label="NPI Number"
                                            name="npiNumber"
                                            value={values.npiNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.npiNumber && touched.npiNumber) && errors.npiNumber}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            error={errors.streetAddress && touched.streetAddress}
                                            label="Street Address"
                                            name="streetAddress"
                                            value={values.streetAddress}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.streetAddress && touched.streetAddress) && errors.streetAddress}
                                            margin="normal"
                                            fullWidth
                                            />
                                    </Grid>
                                        <Grid item
                                        direction="row"
                                            justify="center"
                                            alignItems="center"
                                        >
                                            <TextField
                                                error={errors.city && touched.city}
                                                label="City"
                                                name="city"
                                                value={values.city}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={(errors.city && touched.city) && errors.city}
                                                margin="normal"
                                                style={{ width: '48%', paddingRight: '4%'}}
                                            />
                                            <TextField
                                                error={errors.state && touched.state}
                                                helperText={(errors.state && touched.state) && errors.state}
                                                id="state"
                                                name="state"
                                                select
                                                label="State"
                                                className={classes.textField}
                                                value={values.state}
                                                onChange={handleChange("state")}
                                                margin="normal"
                                                style={{ textAlign: 'center', width: '48%' }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {usStates?.states.map(state => (
                                                    <MenuItem key={state.abbreviation} value={state.abbreviation}>
                                                        {state.name}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                    </Grid> 
                                    <Grid>
                                        <TextField
                                            error={errors.zipCode && touched.zipCode}
                                            label="Zip Code"
                                            name="zipCode"
                                            value={values.zipCode}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.zipCode && touched.zipCode) && errors.zipCode}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            error={errors.phoneNumber && touched.phoneNumber}
                                            label="Phone Number"
                                            name="phoneNumber"
                                            value={values.phoneNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.phoneNumber && touched.phoneNumber) && errors.phoneNumber}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            error={errors.email && touched.email}
                                            label="E-mail"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.email && touched.email) && errors.email}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </Grid>
                                        <Button variant="outlined" color='primary' type="submit">Submit</Button>
                                </Form>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Formik>
        </div>
    )
}

export default Register