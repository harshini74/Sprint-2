$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/FreeCRM.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM launching",
  "description": "",
  "id": "freecrm-launching",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Successful Login",
  "description": "",
  "id": "freecrm-launching;successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is in the Login Page of website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Enter valid email id \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Enter valid password \u003cpwd\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print Login successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "freecrm-launching;successful-login;",
  "rows": [
    {
      "cells": [
        "email",
        "pwd"
      ],
      "line": 22,
      "id": "freecrm-launching;successful-login;;1"
    },
    {
      "cells": [
        "harshini.ghanta@gmail.com",
        "Freecrm1"
      ],
      "line": 23,
      "id": "freecrm-launching;successful-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 23,
  "name": "Successful Login",
  "description": "",
  "id": "freecrm-launching;successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is in the Login Page of website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Enter valid email id harshini.ghanta@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Enter valid password Freecrm1",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print Login successful",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Unsuccessful Login",
  "description": "",
  "id": "freecrm-launching;unsuccessful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "User is in the Login Page of website",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Enter invalid email id \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Enter invalid password\u003cpwd\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Print Login Unsuccessful",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "freecrm-launching;unsuccessful-login;",
  "rows": [
    {
      "cells": [
        "email",
        "pwd"
      ],
      "line": 37,
      "id": "freecrm-launching;unsuccessful-login;;1"
    },
    {
      "cells": [
        "12ab@gmail.com",
        "abcde"
      ],
      "line": 38,
      "id": "freecrm-launching;unsuccessful-login;;2"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 39,
      "id": "freecrm-launching;unsuccessful-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 38,
  "name": "Unsuccessful Login",
  "description": "",
  "id": "freecrm-launching;unsuccessful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "User is in the Login Page of website",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Enter invalid email id 12ab@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Enter invalid passwordabcde",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Print Login Unsuccessful",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 39,
  "name": "Unsuccessful Login",
  "description": "",
  "id": "freecrm-launching;unsuccessful-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "User is in the Login Page of website",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Enter invalid email id ",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Enter invalid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Print Login Unsuccessful",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Addition of Contact",
  "description": "",
  "id": "freecrm-launching;addition-of-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Clicks on Contact",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Click on New button to add new contact",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter first name \u003cfname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter last name \u003clname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "New Contact is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "freecrm-launching;addition-of-contact;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname"
      ],
      "line": 54,
      "id": "freecrm-launching;addition-of-contact;;1"
    },
    {
      "cells": [
        "AAA",
        "BBB"
      ],
      "line": 55,
      "id": "freecrm-launching;addition-of-contact;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 55,
  "name": "Addition of Contact",
  "description": "",
  "id": "freecrm-launching;addition-of-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Clicks on Contact",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Click on New button to add new contact",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter first name AAA",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter last name BBB",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "New Contact is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Addition of Contact invalid",
  "description": "",
  "id": "freecrm-launching;addition-of-contact-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Clicks on Contact",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "Click on New button to add new contact",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Enter null first name \u003cfname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Enter null last name \u003clname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "New Contact is not created",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "freecrm-launching;addition-of-contact-invalid;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname"
      ],
      "line": 68,
      "id": "freecrm-launching;addition-of-contact-invalid;;1"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 69,
      "id": "freecrm-launching;addition-of-contact-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 69,
  "name": "Addition of Contact invalid",
  "description": "",
  "id": "freecrm-launching;addition-of-contact-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Clicks on Contact",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "Click on New button to add new contact",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Enter null first name ",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Enter null last name ",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "New Contact is not created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "Addition of Deal",
  "description": "",
  "id": "freecrm-launching;addition-of-deal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "Clicks on Deals",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "Click on New button to add new deal",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Enter deal title \u003cdtitle\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "New Deal is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "freecrm-launching;addition-of-deal;",
  "rows": [
    {
      "cells": [
        "dtitle"
      ],
      "line": 83,
      "id": "freecrm-launching;addition-of-deal;;1"
    },
    {
      "cells": [
        "Onine Booking"
      ],
      "line": 84,
      "id": "freecrm-launching;addition-of-deal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 84,
  "name": "Addition of Deal",
  "description": "",
  "id": "freecrm-launching;addition-of-deal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "Clicks on Deals",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "Click on New button to add new deal",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Enter deal title Onine Booking",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "New Deal is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 86,
  "name": "Addition of Deal invalid",
  "description": "",
  "id": "freecrm-launching;addition-of-deal-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 87,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "Clicks on Deals",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "Click on New button to add new deal",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Enter null deal title \u003cdtitle\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "New Deal is not created",
  "keyword": "Then "
});
formatter.examples({
  "line": 94,
  "name": "",
  "description": "",
  "id": "freecrm-launching;addition-of-deal-invalid;",
  "rows": [
    {
      "cells": [
        "dtitle"
      ],
      "line": 96,
      "id": "freecrm-launching;addition-of-deal-invalid;;1"
    },
    {
      "cells": [
        ""
      ],
      "line": 97,
      "id": "freecrm-launching;addition-of-deal-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 97,
  "name": "Addition of Deal invalid",
  "description": "",
  "id": "freecrm-launching;addition-of-deal-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 87,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "Clicks on Deals",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "Click on New button to add new deal",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Enter null deal title ",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "New Deal is not created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 100,
  "name": "Addition of Task",
  "description": "",
  "id": "freecrm-launching;addition-of-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 101,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "Clicks on Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "Click on New button to add new task",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "Enter task title \u003cttitle\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Enter due date \u003cddate\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "New Task is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 109,
  "name": "",
  "description": "",
  "id": "freecrm-launching;addition-of-task;",
  "rows": [
    {
      "cells": [
        "ttitle",
        "ddate"
      ],
      "line": 111,
      "id": "freecrm-launching;addition-of-task;;1"
    },
    {
      "cells": [
        "Start planning",
        "30/11/2020 17:30"
      ],
      "line": 112,
      "id": "freecrm-launching;addition-of-task;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 112,
  "name": "Addition of Task",
  "description": "",
  "id": "freecrm-launching;addition-of-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 101,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "Clicks on Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "Click on New button to add new task",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "Enter task title Start planning",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Enter due date 30/11/2020 17:30",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "New Task is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 114,
  "name": "Addition of Task invalid",
  "description": "",
  "id": "freecrm-launching;addition-of-task-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 115,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "Clicks on Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "Click on New button to add new task",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Enter null task title \u003cttitle\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Enter null due date \u003cddate\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "New Task is not created",
  "keyword": "Then "
});
formatter.examples({
  "line": 123,
  "name": "",
  "description": "",
  "id": "freecrm-launching;addition-of-task-invalid;",
  "rows": [
    {
      "cells": [
        "ttitle",
        "ddate"
      ],
      "line": 125,
      "id": "freecrm-launching;addition-of-task-invalid;;1"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 126,
      "id": "freecrm-launching;addition-of-task-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 126,
  "name": "Addition of Task invalid",
  "description": "",
  "id": "freecrm-launching;addition-of-task-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 115,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "Clicks on Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "Click on New button to add new task",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Enter null task title ",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Enter null due date ",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "New Task is not created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 6,
  "name": "FreeCRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User loads the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login Page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 128,
  "name": "Verification of Calendar",
  "description": "",
  "id": "freecrm-launching;verification-of-calendar",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 129,
  "name": "User is in the Account Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "Clicks on Calendar",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "Verify the dates",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Added successfully and can be viewed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});