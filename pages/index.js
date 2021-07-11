import Head from "next/head";
import HeroArea from "../components/HomeComponents/HeroArea";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider, makeStyles } from "@material-ui/core";
import About from "../components/HomeComponents/About";
import Service from "../components/HomeComponents/Service";
import Portfolios from "../components/HomeComponents/Portfolios";
import Testimonials from "../components/HomeComponents/Testimonials";
import Blogs from "../components/HomeComponents/Blogs";
import Contact from "../components/HomeComponents/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6d4c41",
    },
  },
});

const useStyle = makeStyles({
  typography: {
    color: "red",
  },
});

export default function Home() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Next js oractice project" />
          <link rel="icon" href="/images.jpeg" />
        </Head>
        {/* Hero area */}
        <HeroArea />
        {/* about section */}
        <About />
        {/* service section */}
        <Service />
        {/* portfolio section */}
        <Portfolios />
        {/* testimonial section */}
        <Testimonials />
        {/* blog section */}
        <Blogs />
        {/* contact section */}
        <Contact />
      </div>
    </ThemeProvider>
  );
}
