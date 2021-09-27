const Black = () => {
    return (
    <div className="App">
        {letter < 6
            ? <div className = "total">{letter} ({total})</div>
            : <div className = "total" onClick={wipeHistory}>
                {total > 0 && total < 61 &&
                motamo[total-1].toUpperCase()} ({total})
            </div>
        }
    </div>
        
    );
}

export default Black;
