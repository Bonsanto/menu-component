var settings = {
	"header": [
		{
			"name": "File",
			"children": [
				{
					"name": "Open",
					"children": [
						{
							"name": "Open recent",
							"click": function () {
								alert("OMG CLICKED");
							},
							"dblclick": function () {
								alert("OMG DBL CLICKED");
							},
							"keypress": function (element) {
								alert("Key pressed" + element.keyCode)
							}
						},
						{
							"name": "Open last",
							"click": function () {
								alert("OMG CLICKED");
							},
							"dblclick": function () {
								alert("OMG DBL CLICKED");
							}
						},
						{
							"name": "Open From Web",
							"children": [
								{
									"name": "blah"
								},
								{
									"name": "nasus counters",
									"children": [
										{
											"name": "blah"
										},
										{
											"name": "nasus counters"
										}
									]
								}
							]
						}
					]
				},
				{
					"name": "Close"
				},
				{
					"name": "Save"
				},
				{
					"name": "Save as"
				}
			]
		},
		{
			"name": "Favio",
			"children": [
				{
					"name": "kill",
					"children": [
						{
							"name": "rape",
							"children": [
								{
									"name": "popo"
								},
								{
									"name": "popo1"
								},
								{
									"name": "popo2",
									"children": [
										{
											"name": "popo"
										},
										{
											"name": "popo1"
										},
										{
											"name": "popo2"
										}
									]
								}
							]
						}
					]
				},
				{
					"name": "scam"
				}
			]
		},
		{
			"name": "Alberto",
			"children": [
				{
					"name": "shoot",
					"children": [
						{
							"name": "smile",
							"children": [
								{
									"name": "popo"
								},
								{
									"name": "popo1",
									"children": [
										{
											"name": "popo"
										},
										{
											"name": "popo1"
										},
										{
											"name": "popo2"
										}
									]
								},
								{
									"name": "popo2"
								}
							]
						}
					]
				},
				{
					"name": "play",
					"children": [
						{
							"name": "popo"
						},
						{
							"name": "popo1"
						},
						{
							"name": "popo2"
						}
					]
				},
				{
					"name": "PATRIA"
				}
			]
		},
		{
			"name": "Ledezma"
		},
		{
			"name": "Jojoto"
		},
		{
			"name": "patria querida"
		},
		{
			"name": "tuya es mi vida"
		}
	]
};