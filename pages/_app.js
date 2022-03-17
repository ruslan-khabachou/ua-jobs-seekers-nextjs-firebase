import React from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import initAuth from '../utils/initAuth'
import FormErrorsState from '../context/formErrors/formErrorsState'
import JobState from '../context/jobs/jobState'

initAuth()

const MyApp = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <JobState>
        <FormErrorsState>
            <Component {...pageProps} />
        </FormErrorsState>
    </JobState>
)

export default MyApp
