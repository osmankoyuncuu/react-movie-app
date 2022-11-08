import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        height: "7rem",
        color: "white",
        textAlign: "center",
        padding: "1.5rem",
      }}
    >
      <Box
        sx={{
          marginBottom: ".5rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <Link href="https://github.com/osmankoyuncuu" target="_blank">
          <GitHubIcon
            sx={{
              fontSize: "2rem",
              color: "white",
              transition: "all .5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </Link>

        <Link href="https://www.linkedin.com/in/osman-koyuncu/" target="_blank">
          <LinkedInIcon
            sx={{
              fontSize: "2rem",
              color: "white",
              transition: "all .5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </Link>
      </Box>
      © {new Date().getFullYear()} Osman
    </Box>
  );
};

export default Footer;
