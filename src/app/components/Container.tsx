import React from 'react';

export default function Container({ 
  children
}: React.PropsWithChildren) {
  
return (
    <div className="max-w-full w-[810px] mx-auto">
        {children} 
    </div>
);

}