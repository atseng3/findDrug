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
				<div onClick={this.showIt} className={"fakeicon "+this.props.className}>
					{this.state.showOverlay?<Overlay key="overlay"/>:null}
				</div>
			)
		}
	});

	var Overlay = React.createClass({
		render: function() {
			return <div className="overlay">find a medicine</div>
		}
	});

	React.renderComponent(<HeaderBar />, $('.page-container__header')[0]);

});