import React from "react"
import classnames from "classnames"
import "/src/styles/tooltipStyle.css"

const TooltipContext = React.createContext()
export { TooltipContext }

export default function Tooltip({theme, title, children, ...rest}) {
    const [visible, setVisible] = React.useState(false)

    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    return (
        <TooltipContext.Provider value={{theme, title, visible, show, hide}}>
            <div className={classnames("tooltip", rest.className)}>
                {children}
            </div>
        </TooltipContext.Provider>
    )
}