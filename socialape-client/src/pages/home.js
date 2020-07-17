import React, { Component } from "react";
import PropTypes from "prop-types";
// Utils
import ScreamSkeleton from "../util/ScreamSkeleton";
// Components
import Scream from "../components/scream/Scream";
// Material UI
import Grid from "@material-ui/core/Grid";
import Profile from "../components/profile/Profile";
// Redux
import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";

export class home extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeleton />
    );
    return (
      <Grid container spacing={5}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getScreams })(home);
