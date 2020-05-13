import React from 'react';
import { connect } from 'react-redux';
import * as SystemActions from '../store/system/actions'
import { RootState } from '../store';
import { bindActionCreators, Dispatch } from 'redux';
import { Button } from '@ui-kitten/components';

const ChangeTheme = (props) => {
  const { updateTheme, theme } = props;

  const toggleTheme = () => {
    if (theme === 'light') {
      updateTheme({ theme: 'dark' });
      return;
    }
    updateTheme({ theme: 'light' });
  }


  return <Button onPress={() => toggleTheme()}>
      Trocar tema
  </Button>
}

function mapStateToProps(state: RootState) {
  const { system } = state
  return { theme: system.theme }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SystemActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTheme)
