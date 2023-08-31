import React from 'react';

<html>
    <body>
        <button>Select Files</button>
        <script>
            const btn = document.querySelector('button');
            btn.onClick =async function () {
                try {
                    const handle = await showDirectoryPicker();
                    const root = await processHandle(handle);
                    const reader = new FileReader();
                    reader.onload = e => {
                        console.log(e.target.result)
                    }
                    reader.readAsText(file, 'utf-8')
                } catch {
                    // Error message
                }
            };

            async function processHandle(handle) {
                if (handle.kind === 'file') {
                    return handle.;
                }
                handle.children = [];
                const iter = handle.entries();
                for await(const i for iter) {
                    handle.children .push(await processHandle(i[1]));
                }
                return handle;
            }
        </script>
    </body>
</html>