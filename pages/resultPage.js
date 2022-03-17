//import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import HowToApply from "../components/howToApply/howToApply.component";
import JobInformation from "../components/jobInformation/jobInformation.component";
import Layout from "../components/layout/layout.component";
import Spinner from "../components/spinner/spinner.component";
import JobContext from "../context/jobs/jobContext";
import SearchJobs from "../components/searchJobs/searchJobs.component";
import MainContent from "../components/mainContent/mainContent.component";
import SnackBar from "../components/snackBar/snackbar.component";
import LayoutJobSearch from "../components/layout/layout.component";
import {useAuthUser, withAuthUser} from "next-firebase-auth";
import Header from "../components/Header";

const ResultPage = () => {
	const AuthUser = useAuthUser();
	const jobContext = useContext(JobContext);
	const { jobSelected, setSelectedJob } = jobContext;

	useEffect(() => {
		window.scroll({top: 0, left: 0, behavior: 'smooth'});
		const localJobSelected = JSON.parse(localStorage.getItem("jobSelected"));
		if(localJobSelected){
			setSelectedJob(localJobSelected);
		}
	}, [])

	return (
		<Layout>
			<Header email={AuthUser.email} signOut={AuthUser.signOut} avatar={AuthUser.photoURL}/>
			<SearchJobs/>
			<MainContent/>
			<SnackBar/>
			{jobSelected ? (
				<div className="flex flex-col md:flex-row md:justify-between">
					<HowToApply />
					<JobInformation />
				</div>
			) : (
				<div className="flex relative w-full justify-center">
					<Spinner/>
				</div>
			)}
		</Layout>
	);
};

export default withAuthUser()(ResultPage)
