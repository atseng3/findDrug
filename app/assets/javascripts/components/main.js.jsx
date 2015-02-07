$(document).ready(function() {
	var APP = React.createClass({

		render: function() {
			return (
					<div>
						<h1>Hi from React!</h1>
					</div>
				)
		}

	});

	var HeaderBar = React.createClass({

		render: function() {
			return (
				<div>
					<FakeIcon className="icon-apps"/>
					<FakeIcon className="icon-notifications-none"/>
					<FakeIcon className="icon-add-shopping-cart"/>
					<FakeIcon className="profile-icon"/>
				</div>
			)
		}
	})

	var FakeIcon = React.createClass({

		getInitialState: function() {
			return {
				showOverlay: false
			}
		},
		
		showIt: function() {
			this.setState({
				showOverlay: !this.state.showOverlay
			});
		},

		render: function() {
			return (
				<div className={"fakeicon"}>
					<div onClick={this.showIt} className={this.props.className}></div>
					{this.state.showOverlay?<Overlay key="overlay"/>:null}
				</div>
			)
		}
	});

	var Overlay = React.createClass({
		render: function() {
			return (
				<div className="overlay">
					<div className="overlay__title">
						<div className="overlay__image"></div>
						<div className="overlay__description">
							<div className="overlay__creator">Albert Tseng</div>
							<div className="overlay__info">- Creator</div>
							<div className="overlay__info">- Designer</div>
							<div className="overlay__info">- Full Stack Engineer</div>
						</div>
					</div>
					<a className="overlay__button" href="http://albertseng.com">View Profile</a>
				</div>
			)
		}
	});

	React.renderComponent(<HeaderBar />, $('.header__icons')[0]);

});