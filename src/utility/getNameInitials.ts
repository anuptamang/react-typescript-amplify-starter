// export default function getNameInitials(name: any) {
// 	let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')

// 	let initials = [...name.matchAll(rgx)] || []

// 	initials = (
// 		(initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
// 	).toUpperCase()

// 	return initials
// }

const getNameInitials = (name) => {
	let initials = name.split(' ')

	if (initials.length > 1) {
		initials = initials.shift().charAt(0) + initials.pop().charAt(0)
	} else {
		initials = name.substring(0, 2)
	}

	return initials.toUpperCase()
}

export default getNameInitials
