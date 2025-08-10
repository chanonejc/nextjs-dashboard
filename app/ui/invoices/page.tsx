import Pagination from './pagination';
import Search from '../search';
import Table from './table';
import { CreateInvoice } from './buttons';
import { lusitana } from '../fonts';
import { InvoicesTableSkeleton } from '../skeletons';
import { Suspense } from 'react';

export default function Page() {
    return (
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
                <h1 className={`${lusitana.className} text-2xl` }>
                    Invoices
                </h1>
            </div>
            
            <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
                <Search placeholder='Search invoices...' />
                <CreateInvoice />
            </div>
            {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                    <Table query={query} currentPage={currentPage} />
                </Suspense> */}
            <div className='mt-5 flex w-full justify-center'>
                {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}