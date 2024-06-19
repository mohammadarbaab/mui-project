import React from "react";
import Layout from "../components/layouts/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:5, ml:10,"$ h1":{fontWeight:"bold",mb:2}}}>
        <Typography variant="h4">
          Contact My restorant
        </Typography>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        </p>
      </Box>
      <Box sx={{margin:3,width:"600px", ml:10,"@media (max-width:600px)":{
        width:'300px'
      }}}>
        <TableContainer component={Paper}>
        <Table aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell sx={{backgroundColor:"black",color:"white",}} align="center">Contact Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{color:"red",pt:1 }} /> 80123467 (torollfree)
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
                <MarkEmailUnreadIcon sx={{color:"red",pt:1 }} /> kzm@gmail.com (torollfree)
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
                <LocalPhoneIcon sx={{color:"red",pt:1 }} /> 1800+8008
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
