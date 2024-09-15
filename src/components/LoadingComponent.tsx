import classes from './LoadingComponent.module.css';

export const LoadingComponent = () => {
    return (
        <div className={classes.loadingContainer}>
            <h1 className={classes.loadingHeader}>Loading...</h1>
        </div>
    );
}