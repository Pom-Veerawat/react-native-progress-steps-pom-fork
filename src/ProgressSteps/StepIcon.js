import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { color } from 'd3';

class StepIcon extends Component {
  render() {
    let styles;

    if (this.props.isActiveStep) {
      styles = {
        circleStyle: {
          width: 20,
          height: 20,
          borderRadius: 20,
          backgroundColor: this.props.activeStepIconColor,
          borderColor: this.props.activeStepIconBorderColor,
          borderWidth: 1,
          bottom: 4,
          marginTop:20,
         
        },
        circleText: {
          alignSelf: 'center',
          top: 0,
          fontSize:13,
          fontFamily: "Aeonik-Regular",
          color:"#FAFAFA"
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.activeLabelColor,
          fontSize: this.props.activeLabelFontSize || this.props.labelFontSize,
          fontSize:12,
          fontFamily: "Aeonik-Regular",
          color:"#FAFAFA"
        },
        leftBar: {
          position: 'absolute',
          top: 60 / 2.5,
          left: 20,
          right: 30 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 40 / 2 + 2,
        },
        rightBar: {
          position: 'absolute',
          top: 60 / 2.5,
          right: -60,
          left: 30 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 40 / 2 + 2,
        },
        stepNum: {
          color: this.props.activeStepNumColor,
        },
      };
    } else if (this.props.isCompletedStep) {
      styles = {
        circleStyle: {
          width: 20,
          height: 20,
          borderRadius: 18,
          backgroundColor: this.props.completedStepIconColor,
          marginTop:15,
          backgroundColor:"black",
          borderWidth:2,
          borderColor:"#FF2E00"
        },
        circleText: {
          alignSelf: 'center',
          top: 18 / 2,
          alignSelf: 'center',
          top: 2,
          fontSize:9,
          fontFamily: "Aeonik-Regular",
          
          color:"#FF2E00"
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.completedLabelColor,
          marginTop: 6,
          fontSize: this.props.labelFontSize,
          fontSize:11,
          fontFamily: "Aeonik-Regular",
          color:"#FAFAFA"
        },
        leftBar: {
          position: 'absolute',
          top: 60 / 2.5,
          left: 20,
          right: 30 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 36 / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: 60 / 2.5,
          right: -60,
          left: 30 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginLeft: 36 / 2 + 4,
        },
        stepNum: {
          color: this.props.completedStepNumColor,
        },
      };
    } else {
      styles = {
        circleStyle: {
          width: 20,
          height: 20,
          borderRadius: 20,
          backgroundColor: this.props.disabledStepIconColor,
          borderColor: this.props.disabledStepIconColor,
          borderWidth: 1,
          borderColor:"#FAFAFA",
          marginTop:17,
        },
        circleText: {

          alignSelf: 'center',
          top: 0,
          fontSize:13,
          fontFamily: "Aeonik-Regular",
          color:"#FAFAFA"
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          marginTop: 4,
          fontSize: this.props.labelFontSize,
          fontSize:11,
          fontFamily: "Aeonik-Regular",
          color:"#FAFAFA"
        },
        leftBar: {
          position: 'absolute',
          top: 60 / 2.5,
          left: 20,
          right: 30 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginRight: 36 / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: 60 / 2.5,
          right: -60,
          left: 30 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 36 / 2 + 4,
        },
        stepNum: {
          color: this.props.disabledStepNumColor,
        },
      };
    }

    return (
      
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        {this.props.isCompletedStep ?  
        <TouchableOpacity style={styles.circleStyle} onPress={() => {  ;this.props.onStepPress?.(this.props.stepNum)}}>
       
       <Text style={styles.circleText}>
         {this.props.isCompletedStep ? (
           <Text style={{ color: this.props.completedCheckColor }}>&#10003;</Text>
         ) : (
           <Text style={styles.stepNum}>{this.props.stepNum}</Text>
         )}
       </Text>
      
     </TouchableOpacity> :
        <View style={styles.circleStyle}>
       
          <Text style={styles.circleText}>
            {this.props.isCompletedStep ? (
              <Text style={{ color: this.props.completedCheckColor }}>&#10003;</Text>
            ) : (
              <Text style={styles.stepNum}>{this.props.stepNum}</Text>
            )}
          </Text>
         
        </View>
          }
        <Text style={styles.labelText}>{this.props.label}</Text>
       
        {!this.props.isFirstStep && <View style={styles.leftBar} />}
        {!this.props.isLastStep && <View style={styles.rightBar} />}
       
      </View>
     
    );
  }
}

StepIcon.propTypes = {
  stepCount: PropTypes.number.isRequired,
  stepNum: PropTypes.number.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,

  borderWidth: PropTypes.number,
  borderStyle: PropTypes.string,
  activeStepIconBorderColor: PropTypes.string,

  progressBarColor: PropTypes.string,
  completedProgressBarColor: PropTypes.string,

  activeStepIconColor: PropTypes.string,
  disabledStepIconColor: PropTypes.string,
  completedStepIconColor: PropTypes.string,

  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.number,
  activeLabelColor: PropTypes.string,
  activeLabelFontSize: PropTypes.number,
  completedLabelColor: PropTypes.string,

  activeStepNumColor: PropTypes.string,
  completedStepNumColor: PropTypes.string,
  disabledStepNumColor: PropTypes.string,

  completedCheckColor: PropTypes.string,
};

StepIcon.defaultProps = {
  borderWidth: 3,
  borderStyle: 'solid',
  activeStepIconBorderColor: '#4BB543',

  progressBarColor: '#ebebe4',
  completedProgressBarColor: '#4BB543',

  activeStepIconColor: 'transparent',
  completedStepIconColor: '#4BB543',
  disabledStepIconColor: '#ebebe4',

  labelColor: 'lightgray',
  labelFontSize: 14,
  activeLabelColor: '#4BB543',
  completedLabelColor: 'lightgray',

  activeStepNumColor: 'black',
  completedStepNumColor: 'black',
  disabledStepNumColor: 'white',

  completedCheckColor: 'white',
};

export default StepIcon;
