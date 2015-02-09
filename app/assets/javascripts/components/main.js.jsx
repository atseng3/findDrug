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
		
		showIt: function(event) {
			var $currentTarget = $(event.currentTarget);
			$currentTarget.toggleClass('hiding');
		},

		render: function() {
			return (
				<div className="fakeicon hiding" onClick={this.showIt} >
					<div className={this.props.className}></div>
					<Overlay />
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
	$(document).click(function() {
		$('.fakeicon').addClass('hiding');
	});

	// api: 'https://api.sendhub.com/v1/messages/?username=6504899461&api_key=a622558e9f2cc5134744c3892043aaf207eca250',

	// cors_api_url: 'https://cors-anywhere.herokuapp.com/',

	// doCORSRequest: function(options, printResult) {
	//     var x = new XMLHttpRequest();
	//     x.open(options.method, this.cors_api_url + options.url);
	//     x.onload = x.onerror = function() {
	//       printResult(
	//         options.method + ' ' + options.url + '\n' +
	//         x.status + ' ' + x.statusText + '\n\n' +
	//         (x.responseText || '')
	//       );
	//     };
	//     if (/^POST/i.test(options.method)) {
	//       x.setRequestHeader('Content-Type', 'application/json');
	//     }
	//     x.send(options.data);
	// },

});