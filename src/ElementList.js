import React from 'react';

const ElementList = ({ elements, ElementComponent }) => {
    return (
        <div className="overflow-x-auto max-w-screen-lg mx-auto pl-7 pt-4">
            <div className="flex space-x-4">
                {elements.map((element, index) => (
                    <div key={index} className="flex-none w-auto">
                        <ElementComponent {...element} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ElementList;