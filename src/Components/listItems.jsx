import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PaymentIcon from "@mui/icons-material/Payment";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import FeedbackIcon from "@mui/icons-material/Feedback";

export const mainListItems = (
  <React.Fragment>
    <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Student Information" />
      </ListItemButton>
    </Link>

    <Link to="/attendance" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItemButton>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary="Attendance" />
      </ListItemButton>
    </Link>

    <Link
      to="/course-registeration"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <AppRegistrationIcon />
        </ListItemIcon>
        <ListItemText primary="Course Registeration" />
      </ListItemButton>
    </Link>

    <Link to="/marks" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Marks" />
      </ListItemButton>
    </Link>

    <Link to="/time-table" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItemButton>
        <ListItemIcon>
          <ViewTimelineIcon />
        </ListItemIcon>
        <ListItemText primary="Time Table" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset></ListSubheader>
    <Link
      to="/fee-payment"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Fee Payment" />
      </ListItemButton>
    </Link>
    <Link to="/feedback" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItemButton>
        <ListItemIcon>
          <FeedbackIcon />
        </ListItemIcon>
        <ListItemText primary="Feedback" />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
