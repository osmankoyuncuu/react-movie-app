import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const AlertSendMail = () => {
  return (
    <Box sx={{ position: "absolute", right: 0, top: 0 }}>
      <Alert variant="filled" severity="success">
        Reset link sent to your email!
      </Alert>
    </Box>
  );
};

export default AlertSendMail;
