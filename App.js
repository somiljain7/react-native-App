import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet,TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import Camera from 'react-native-camera';
 
 class TitleText extends React.Component { 
   
   render() { 
     return ( 
       <Text style={{ fontSize: 48, color: 'white' }}> 
         {this.props.label} 
       </Text> 
     ) 
   } 
 } 
 
 
 export default class App extends React.Component { 
    constructor(props) {
    	super(props);
    	this.focusNextField = this.focusNextField.bind(this);
    	this.inputs = {};
  	}
  	focusNextField(id) {
    	this.inputs[id].focus();
  	}
    handleUsernameChanges(NewText){
    	console.log('USERNAME is ${NewText}')
  	}
  	handlePasswordChanges(NewText){
    	console.log('PASSWORD is ${NewText}')
  	}
  	handleUsernameregChanges(NewText){
    	console.log('USERNAME is ${NewText}')
  	}
  	handlePasswordregChanges(NewText){
    	console.log('PASSWORD is ${NewText}')
  	}
  	
  	djregister(){

  	}
	handleFirstNameChanges(NewText){
		console.log('FIRSTNAME is ${NewText}')
	}

	handleLastNameChanges(NewText){
		console.log('LASTNAME is ${NewText}')
	}

	handleEmailChanges(NewText){
		console.log('EMAIL is ${NewText}')
	}
	handleConfirmPasswordChanges(NewText){
		console.log('CONFIRM PASSWORD is ${NewText}')
	}
 
   render() {
     return (
		<Swiper loop={false} showsPagination={false} index={1}>
			<ImageBackground source={require('./img/1.jpg')} style={styles.new}>
				<ScrollView>
				  <Text style={styles.welcome}>Planto</Text>
					  <Text style={[styles.login, styles.username]}>Username:</Text>
			          <TextInput style={styles.inputbox}
			               OnChangeText = {this.handleUsernameChanges}
			                placeholder="username" 
			                onSubmitEditing={() => {
            				 this.focusNextField('password');
       					     }}
       					    returnKeyType={ "next" }
       					    ref={ input => {
           					this.inputs['username'] = input;
           					 }}
			               
			          />
			          <Text style={[styles.login, styles.password]}>Password:</Text>
			          <TextInput style={styles.inputbox}
			               OnChangeText = {this.handlePasswordChanges}
			                placeholder="password"
			                returnKeyType={ "done" }        					
         					ref={ input => {
           					this.inputs['password'] = input;
        					}}
        					secureTextEntry={true}
			          />
			        	<TouchableOpacity onPress={this.handlPress}>
			            	<Text style={styles.bttn}>Sign In</Text>
			          	</TouchableOpacity>
				</ScrollView>
			</ImageBackground>
			<ImageBackground source={require('./img/1.jpg')} style={styles.new}>
		        <ScrollView style={styles.container}>
				  <Text style={styles.welcome}>Planto</Text>
		          <Text style={[styles.login, styles.username]}>First Name:</Text>
		          <TextInput style={styles.inputbox}
		               OnChangeText = {this.handleFirstNameChanges}
		                placeholder="firstname" 
			                onSubmitEditing={() => {
            				 this.focusNextField('lastname');
       					     }}
       					    returnKeyType={ "next" }
       					    ref={ input => {
           					this.inputs['firstname'] = input;
           					 }}
		          />
		          <Text style={[styles.login, styles.username]}>Last Name:</Text>
		          <TextInput style={styles.inputbox}
		               OnChangeText = {this.handleLastNameChanges}
		                placeholder="lastname" 
			            onSubmitEditing={() => {
            			this.focusNextField('usernamereg');
       					}}
       					returnKeyType={ "next" }
       					ref={ input => {
           				this.inputs['lastname'] = input;
           			    }}
		          />
		          <Text style={[styles.login, styles.username]}>Username:</Text>
		          <TextInput style={styles.inputbox}
		               OnChangeText = {this.handleUsenameregChanges}
		                placeholder="usernamereg" 
			                onSubmitEditing={() => {
            				this.focusNextField('email');
       					    }}
       					    returnKeyType={ "next" }
       					    ref={ input => {
           					this.inputs['usernamereg'] = input;
           					}}
		          />
		         
		          <Text style={[styles.login, styles.username]}>Email:</Text>
		          <TextInput style={styles.inputbox}
		               OnChangeText = {this.handleEmailChanges}
		                placeholder="email" 
			                onSubmitEditing={() => {
            				 this.focusNextField('passwordreg');
       					     }}
       					    returnKeyType={ "next" }
       					    ref={ input => {
           					this.inputs['email'] = input;
           					 }}
		                keyboardType='email-address'
		          />
		          
		          <Text style={[styles.login, styles.password]}>Password:</Text>
		          <TextInput style={styles.inputbox}
		               OnChangeText = {this.handlePasswordregChanges}
		                placeholder="passwordreg" 
			                onSubmitEditing={() => {
            				 this.focusNextField('confirm');
       					     }}
       					    returnKeyType={ "next" }
       					    ref={ input => {
           					this.inputs['passwordreg'] = input;
           					 }}
		               secureTextEntry={true}
	              />
		         
		          <Text style={[styles.login, styles.password]}>Confirm Password:</Text>
		           <TextInput style={styles.inputbox}
		               OnChangeText = {this.handleConfirmPasswordregChanges}
		               secureTextEntry={true}
		               placeholder="confirm"
			           returnKeyType={ "done" }        					
         			   ref={ input => {
           			   this.inputs['confirm'] = input;
        			   }}
		           />
		          <TouchableOpacity onPress={this.handlPress}>
		            <Text style={styles.bttn}>Register</Text>
		          </TouchableOpacity>
		      </ScrollView>
		      </ImageBackground>
       	
     	        <ScrollView style={styles.container}>
				<Camera ref={cam => { this.camera = cam; }} style={styles.preview} aspect={Camera.constants.Aspect.fill}> <Text style={styles.capture} onPress={this.takePicture.bind(this)}> [CAPTURE] </Text></Camera>

		          </ScrollView>
		        
         		  </Swiper>
    )

  } 
 } 
 
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,    
  },
  welcome: {
    fontSize: 42,
    textAlign: 'center',
    marginTop: 20,
    color: "#fff",
  },
  login: {
    fontSize: 28,
    color: "#fff",
    marginLeft: 24,
    marginTop: 18,
  },
  new: {
    width: '100%', 
    height: '100%'
  },
  inputbox: {
    color: "#fff",
    fontSize: 22,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    width: 180,
    marginLeft: 24
  },
  bttn: {
    marginTop: 60,
    marginBottom: 100,
    marginLeft: 60,
    paddingLeft: 60,
    paddingRight: 60,
    marginRight: 60,
    paddingTop: 20,
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 2,
    paddingBottom: 20,
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: 'transparent',
  }
});