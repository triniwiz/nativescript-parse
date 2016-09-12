declare var com: any, java: any;
const _ParseUser = com.parse.ParseUser;
const _LogInCallback = com.parse.LogInCallback;
const _LogOutCallback = com.parse.LogOutCallback;
const _AuthenticationCallback = com.parse.AuthenticationCallback;
const _RequestPasswordResetCallback = com.parse.RequestPasswordResetCallback;
const _SignUpCallback = com.parse.SignUpCallback;
export class ParseUser {
	become(sessionToken: string) {
		_ParseUser.become(sessionToken);
	}
	becomeInBackground(sessionToken: string, callback?: Function) {
		if (callback !== undefined && typeof callback === 'function') {
			_ParseUser.becomeInBackground(sessionToken);
		} else {
			_ParseUser.becomeInBackground(sessionToken, new _LogInCallback({
				done(user, e) {
					if (user !== null && e === null) {
						callback.apply(null, [{ event: 'success', user: user }]);
					} else {
						callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
					}
				}
			}));
		}
	}
	enableAutomaticUser() {
		_ParseUser.enableAutomaticUser();
	}
	enableRevocableSessionInBackground() {
		_ParseUser.enableRevocableSessionInBackground();
	}
	fetch() {
		_ParseUser.fetch();
	}
	fetchIfNeeded() {
		_ParseUser.fetchIfNeeded();
	}
	currentUser() {
		return _ParseUser.getCurrentUser();
	}
	getEmail() {
		return _ParseUser.getEmail();
	}
	getQuery() {
		_ParseUser.getQuery();
	}
	getSessionToken() {
		return _ParseUser.getSessionToken();
	}
	getUsername() {
		return _ParseUser.getUsername();
	}
	isAuthenticated() {
		return _ParseUser.isAuthenticated();
	}
	isLinked(authType: string) {
		return _ParseUser.isLinked(authType);
	}
	isNew() {
		return _ParseUser.isNew();
	}
	linkWithInBackground(authType: string, authData: Object) {
		var map = new java.util.HashMap();
		Object.keys(authData).forEach(key => {
			let item = authData[key];
			map.put(key, item);
		});
		_ParseUser.linkWithInBackground(authType, map);
	}
	logIn(username: string, password: string) {
		_ParseUser.logIn(username, password);
	}
	logInInBackground(username: string, password: string, callback?: Function) {
		if (callback !== undefined && typeof callback === 'function') {
			_ParseUser.logIn(username, password);
		} else {
			_ParseUser.logInInBackground(username, password, new _LogInCallback({
				done(user, e) {
					if (user !== null && e === null) {
						callback.apply(null, [{ event: 'success', user: user }]);
					} else {
						callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
					}
				}
			}));
		}
	}
	logOut() {
		_ParseUser.logOut();
	}
	logOutInBackground(callback?: Function) {
		if (callback !== undefined && typeof callback === 'function') {
			_ParseUser.logOutInBackground();
		} else {
			_ParseUser.logOutInBackground(new _LogOutCallback({
				done(e) {
					if (e === null) {
						callback.apply(null, [{ event: 'success' }]);
					} else {
						callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
					}
				}
			}));
		}
	}
	put(key: string, value: any) {

	}

	/*TODO*/
	/*registerAuthenticationCallback(authType: string, callback: Function) {
		_ParseUser.registerAuthenticationCallback(authType, new _AuthenticationCallback({
			onRestore(authData: Object) {
				var map = new java.util.HashMap();
				Object.keys(authData).forEach(key => {
					let item = authData[key];
					map.put(key, item);
				});

			}
		}))
	}*/
	remove(key: string) {

	}
	requestPasswordReset(email: string) {
		_ParseUser.requestPasswordReset(email);
	}
	requestPasswordResetInBackground(email: string, callback?: Function) {
		if (callback !== undefined && typeof callback === 'function') {
			_ParseUser.requestPasswordResetInBackground(email);
		} else {
			_ParseUser.requestPasswordResetInBackground(email, new _RequestPasswordResetCallback({
				done(e) {
					if (e === null) {
						callback.apply(null, [{ event: 'success' }]);
					} else {
						callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
					}
				}
			}));
		}
	}
	setEmail(email: string) {

	}
	setPassword(password: string) {

	}
	setUsername(username: string) {

	}
	signUp() {

	}
	signUpInBackground(callback?: Function) {
		if (callback !== undefined && typeof callback === 'function') {
			_ParseUser.signUpInBackground();
		} else {
			_ParseUser.signUpInBackground(new _SignUpCallback({
				done(e) {
					if (e === null) {
						callback.apply(null, [{ event: 'success' }]);
					} else {
						callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
					}
				}
			}));
		}
	}
	unlinkFromInBackground(authType: string) {
		_ParseUser.unlinkFromInBackground(authType);
	}
}