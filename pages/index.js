import {useContext, useEffect} from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth';
import DemoPageLinks from '../components/DemoPageLinks';
import Layout from "../components/layout/layout.component";
import JobContext from "../context/jobs/jobContext";
import Header from "../components/Header";

const styles = {
    content: {
        padding: 32,
    },
    infoTextContainer: {
        marginBottom: 32,
    },
}

const Demo = () => {
    const AuthUser = useAuthUser();
    const jobContext = useContext(JobContext);
    const {getJobsByDefault, isFirstTime} = jobContext;

    useEffect(() => {
        if (isFirstTime) {
            getJobsByDefault()
        }
    }, [])
    return (

        <Layout>
            <Header email={AuthUser.email} signOut={AuthUser.signOut} avatar={AuthUser.photoURL}/>
            <div style={styles.content}>
                <div style={styles.infoTextContainer}>
                    <h3>Home</h3>
                    <p>
                        This page does not require authentication, so it won't redirect to
                        the login page if you are not signed in.
                    </p>
                    <p>
                        If you remove `getServerSideProps` from this page, it will be static
                        and load the authed user only on the client side.
                    </p>
                </div>

            </div>
            <DemoPageLinks/>
        </Layout>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser()(Demo)
