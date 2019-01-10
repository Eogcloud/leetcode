/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {

		emails.forEach(email => {
			console.log(email.split('@')[0].split('+')[0].replace('.', '') + '@' + email.split('@')[1])
		})
};

numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])