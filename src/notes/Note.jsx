<div className="ml-menu-list">
            {data.map((menu, index) =>(
                <div className={`list-box ${index % 2 === 0 ? "bg-cream" : "bg-brown"}`} key={index}>
                    
                    {menu.items.map((item, idx) =>(
                        <div className="list-list" key={idx}>
                            <div className="list-header">
                                <h2>{menu.category}</h2>
                                <div className="size-box">
                                    <p>{item.sizes.S}</p>
                                    <p>{item.sizes.M}</p>
                                    <p>{item.sizes.L}</p>
                                </div>
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            ))}
            
        </div>