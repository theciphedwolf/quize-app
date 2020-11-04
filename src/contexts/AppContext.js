import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false)
	const sidebar = {
		collapsed,
		setCollapsed
	}

	return (
		<AppContext.Provider value={{ sidebar }}>{children}</AppContext.Provider>
	)
}
