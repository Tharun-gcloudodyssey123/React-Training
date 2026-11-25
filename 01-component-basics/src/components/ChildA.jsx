export function A(props) {
    return (
        <>
            <h2>This is from component A</h2>
            <div>
                <h>Employee Data:</h>
                {props.employeeData.map((employee, index) => {
                    return (
                        <div key={index}>
                            <pre>
                                {JSON.stringify(employee)}
                            </pre>
                        </div>
                    )
                })}
            </div>
        </>
    )
}