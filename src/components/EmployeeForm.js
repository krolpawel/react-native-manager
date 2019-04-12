import React, { Component } from 'react';
import {
    CardSection,
    Input
} from './common';
import {
    Picker,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}/>
                </CardSection>

                <CardSection>
                        <Input
                            label="Phone"
                            placeholder="555-555"
                        value={this.props.phone}
                        onChangeText = {value => this.props.employeeUpdate({prop: 'phone', value})} />
                </CardSection>

                <CardSection style={styles.pickerSection}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        style={{ flex: 1 }}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    root: {
        marginTop: 80
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    pickerSection: {
        alignItems: 'center'
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);