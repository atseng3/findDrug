$(document).ready(function() {
	var APP = React.createClass({displayName: "APP",

		render: function() {
			return (
					React.createElement("div", null, 
						React.createElement("h1", null, "Hi from React!")
					)
				)
		}

	});

	var HeaderBar = React.createClass({displayName: "HeaderBar",

		render: function() {
			return (
				React.createElement("div", null, 
					React.createElement(FakeIcon, {className: "icon-apps"}), 
					React.createElement(FakeIcon, {className: "icon-notifications-none"}), 
					React.createElement(FakeIcon, {className: "icon-add-shopping-cart"}), 
					React.createElement(FakeIcon, {className: "profile-icon"})
				)
			)
		}
	})

	var FakeIcon = React.createClass({displayName: "FakeIcon",

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
				React.createElement("div", {onClick: this.showIt, className: "fakeicon "+this.props.className}, 
					this.state.showOverlay?React.createElement(Overlay, {key: "overlay"}):null
				)
			)
		}
	});

	var Overlay = React.createClass({displayName: "Overlay",
		render: function() {
			return (
				React.createElement("div", {className: "overlay"}, 
					React.createElement("div", {className: "overlay__title"}, 
						React.createElement("div", {className: "overlay__image"}), 
						React.createElement("span", null, "Albert Tseng")
					), 
					React.createElement("a", {className: "overlay__button", href: "http://albertseng.com"}, "View Profile")
				)
			)
		}
	});

	React.renderComponent(React.createElement(HeaderBar, null), $('.page-container__header')[0]);

});
