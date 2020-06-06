import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Container,
    makeStyles,
    Grid,
    CircularProgress,
    Button,
    TextField,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Select,
    InputLabel,
    MenuItem,
    FormControl
} from '@material-ui/core'
import Background from '../images/background.jpeg'
var UsaStates = require('usa-states').UsaStates;

const useStyles = makeStyles(() => ({
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
        
    },
    outterGrid: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
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
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});
const usStates = new UsaStates();
const stateSelectNodes = usStates?.states.map(state => {
    return (
        <MenuItem value={state.abreviation}>{state.name}</MenuItem>
    )
})

const Register = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    npiNumber: '',
                    businessAddress: '',
                    phoneNumber: '',
                    email: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={values => {
                    // same shape as initial values
                    alert(values);
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
                        <CardHeader title="Register" />
                            <CardContent>
                                <Form>
                                    <Grid>
                                        <TextField
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
                                                label="Street Address"
                                                name="streetAddress"
                                                value={values.streetAddress}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={(errors.streetAddress&& touched.streetAddress) && errors.streetAddress}
                                                margin="normal"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid>
                                            <FormControl fullWidth>
                                                <InputLabel id="select-label">State</InputLabel>
                                                <Select
                                                    label='select-label'
                                                    name="state"
                                                    value={values.state}
                                                    onChange={handleChange}
                                                    onBlur={event => {
                                                        event.target.name = 'state';
                                                        handleBlur(event);
                                                    }}
                                                    helperText={(errors.state && touched.state) && errors.this.state}
                                                    margin="normal"
                                                    >
                                                    <MenuItem value="">
                                                    <em>None</em>
                                                    </MenuItem>
                                                    {stateSelectNodes}
                                                </Select>
                                            </FormControl>
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