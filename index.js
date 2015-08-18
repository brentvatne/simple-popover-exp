var React = require('react-native');

var {
  AppRegistry,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

class Popover extends React.Component {

  render() {
    var { style, attachmentStyle, attachmentPosition } = this.props;

    return (
      <View style={[styles.container, style]}>
        { attachmentPosition === 'top' &&
          <View style={[styles.attachmentTop, attachmentStyle]} /> }
        <View style={styles.body}>
          {this.props.children}
        </View>
        { attachmentPosition === 'bottom' &&
          <View style={[styles.attachmentBottom, attachmentStyle]} /> }
      </View>
    )
  }
}

Popover.defaultProps = {
  attachmentPosition: 'bottom',
}

var attachmentStyle = {
  borderRightWidth: 15,
  borderRightColor: 'transparent',
  borderLeftWidth: 15,
  borderLeftColor: 'transparent',
}

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    width: 200,
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 18,
    borderRadius: 3,
  },
  attachmentTop: {
    ...attachmentStyle,
    borderBottomWidth: 15,
    borderBottomColor: '#fff',
  },
  attachmentBottom: {
    ...attachmentStyle,
    borderTopWidth: 15,
    borderTopColor: '#fff',
  },
  popoverBodyText: {
    color: '#1e545e',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

class ExampleApp extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green',}}>
        <Popover style={{bottom: 0, left: 0, right: 0, alignItems: 'center'}}
                 attachmentPosition='bottom'>
          <Text style={styles.popoverBodyText}>
            No need to linger, tap the home button.
          </Text>
        </Popover>

        <Popover style={{top: 220, left: 20}}
                 attachmentPosition='top'
                 attachmentStyle={{alignSelf: 'flex-start', marginLeft: 15,}}>
          <Text style={styles.popoverBodyText}>
            Click here to get started!
          </Text>
        </Popover>

        <Popover style={{top: 30, right: 10}}
                 attachmentPosition='top'
                 attachmentStyle={{alignSelf: 'flex-end', marginRight: 15,}}>
          <Text style={styles.popoverBodyText}>
            Check out more information
          </Text>
        </Popover>
      </View>
    );
  }
}

AppRegistry.registerComponent('main', () => ExampleApp);
