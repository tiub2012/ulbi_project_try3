import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Suspense fallback="">
                <BugButton />
            </Suspense>
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
